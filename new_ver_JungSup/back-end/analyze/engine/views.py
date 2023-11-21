from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from .models import AnalyzeReport, AnalyzeQueue
from rest_framework.permissions import AllowAny
from .engine_controller import analysis_engine
from django_q.tasks import async_task
from .serializers import AnalyzeReportSerializer
from .serializers import AnalyzeQueueSerializer
from django.http import JsonResponse
from rest_framework.pagination import PageNumberPagination
from django_q.models import OrmQ

# Scanwich 분석 요청
@api_view(['POST'])
@permission_classes([AllowAny])
def queue_analysis(request):
      u_id = request.POST.get('u_id', None)
      f_path = request.FILES.get('file', None)

      if not all([u_id, f_path]):
            return Response({"detail": "Missing parameters."}, status=status.HTTP_400_BAD_REQUEST)

      report = AnalyzeReport(u_id=u_id, f_path=f_path)
      report.save()

      queue_item = AnalyzeQueue(r_id=report, u_id=u_id)
      queue_item.save()

      # Django Q Call
      async_task("engine.views.process_analysis", report.r_id)

      return Response({"success": True, "message": "File uploaded and analysis queued."}, status=status.HTTP_201_CREATED)

# Scanwich 분석 요청 처리 함수
def process_analysis(r_id):
      try:
            report = AnalyzeReport.objects.get(r_id=r_id)
            r_queue = AnalyzeQueue.objects.get(r_id=report)
            r_queue.q_try = r_queue.q_try + 1
            r_queue.save()
            
            if r_queue.q_try > 2:
                  d_queue = OrmQ.objects.get(id=r_id)
                  d_queue.delete()
                  r_queue.delete()
                  report.r_status = "error"
                  report.save()
            
      except AnalyzeReport.DoesNotExist:
            return
      # Analysis Data get from report table
      f_path = report.f_path.path
      report.r_data = analysis_engine(r_id, f_path)
      report.save()

      # Analysis Finish
      try:
            report.r_status = "true"
            report.save()
            r_queue.delete()
      # Analysis Error
      except AnalyzeQueue.DoesNotExist:
            pass
      
# 요청 리포트 분석 재시도
@api_view(['POST'])
@permission_classes([AllowAny])
def retry_analysis(request):
      r_id = request.POST.get('r_id')
      
      try:
            report = AnalyzeReport.objects.get(r_id=r_id, r_status='error')
            queue_item = AnalyzeQueue(r_id=report, u_id=report.u_id)
            queue_item.save()
            
            report.r_status = "false"
            report.save()
      except AnalyzeReport.DoesNotExist:
            return JsonResponse({"detail": "No error report found with the provided r_id."}, status=400)

      # Django Q Call
      async_task("engine.views.process_analysis", report.r_id)

      return JsonResponse({"success": True, "message": "Retry analysis initiated."}, status=200)

# 요청 리포트 지우기
@api_view(['POST'])
@permission_classes([AllowAny])
def delete_error_report(request):
      r_id = request.POST.get('r_id')

      try:
            report = AnalyzeReport.objects.get(r_id=r_id, r_status='error')
      except AnalyzeReport.DoesNotExist:
            return Response("No error report found with the provided r_id.", status=400)

      try:
            r_queue = AnalyzeQueue.objects.get(r_id=report)
            r_queue.delete()
      except AnalyzeQueue.DoesNotExist:
            pass

      report.delete()
      return Response("Error report deleted successfully.", status=200)

# 모든 리포트 불러오기
@api_view(['GET'])
@permission_classes([AllowAny])
def get_analyze_reports(request):
      if request.method == 'GET':
            # r_status 값이 true인 것만 필터링
            reports = AnalyzeReport.objects.filter(r_status="true")
            serializer = AnalyzeReportSerializer(reports, many=True)
            return JsonResponse(serializer.data, safe=False)

# 사용자 리포트 불러오기
@api_view(['GET'])
@permission_classes([AllowAny])
def get_user_analyze_reports(request, u_id):
      if request.method == 'GET':
            reports = AnalyzeReport.objects.filter(u_id=u_id).order_by('-r_date')[:10]
            serializer = AnalyzeReportSerializer(reports, many=True)
            return JsonResponse(serializer.data, safe=False)

# 모든 리포트를 페이징 처리를 통해 불러오기
class AnalyzeReportPagination(PageNumberPagination):
      page_size = 12
@api_view(['GET'])
@permission_classes([AllowAny])
def get_analyze_reports_re(request):
      paginator = AnalyzeReportPagination()
      reports = AnalyzeReport.objects.all().filter(r_status="true").order_by('-r_date')
      page = paginator.paginate_queryset(reports, request)
      serializer = AnalyzeReportSerializer(page, many=True)

      next_link = paginator.get_next_link()
      
      return Response({
      'results': serializer.data,
      'next': next_link if next_link else None,
      })

def report_detail(request, r_id):
      try:
            report = AnalyzeReport.objects.get(r_id=r_id)
            if report.r_status == 'false':
                  return JsonResponse({
                        'r_id': report.r_id,
                        'r_status': report.r_status,
                        'u_id': report.u_id,
                        'f_path': report.f_path.url,
                  })
            return JsonResponse({
            'r_id': report.r_id,
            'r_date': report.r_date,
            'r_data': report.r_data,
            'r_status': report.r_status,
            'u_id': report.u_id,
            'f_path': report.f_path.url,
      })
      except AnalyzeReport.DoesNotExist:
            return JsonResponse({'error': '리포트를 찾을 수 없습니다.'}, status=404)

def report_status(request, r_id):
      try:
            report = AnalyzeReport.objects.get(r_id=r_id)
            
            return JsonResponse({
            'r_id': report.r_id,
            'r_status': report.r_status,
            'u_id': report.u_id,
            'f_path': report.f_path.url,
      })
      except AnalyzeReport.DoesNotExist:
            return JsonResponse({'error': '리포트를 찾을 수 없습니다.'}, status=404)