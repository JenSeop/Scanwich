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

def process_analysis(r_id):
      try:
            report = AnalyzeReport.objects.get(r_id=r_id)
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
            queue_item = AnalyzeQueue.objects.get(r_id=report)
            queue_item.delete()
      # Analysis Error
      except AnalyzeQueue.DoesNotExist:
            pass

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
            # r_status 값이 true인 것과 u_id 값으로 필터링
            reports = AnalyzeReport.objects.filter(u_id=u_id).order_by('-r_date')[:8]
            serializer = AnalyzeReportSerializer(reports, many=True)
            return JsonResponse(serializer.data, safe=False)

class AnalyzeReportPagination(PageNumberPagination):
      page_size = 12

@api_view(['GET'])
@permission_classes([AllowAny])
def get_analyze_reports_re(request):
      paginator = AnalyzeReportPagination()
      reports = AnalyzeReport.objects.all().order_by('-r_date')
      page = paginator.paginate_queryset(reports, request)
      serializer = AnalyzeReportSerializer(page, many=True)

      next_link = paginator.get_next_link()
      
      # 다음 페이지 URL이 있는 경우에만 next 필드에 URL을 포함합니다.
      return Response({
      'results': serializer.data,
      'next': next_link if next_link else None,
      })