from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from .models import AnalyzeReport, AnalyzeQueue
from rest_framework.permissions import AllowAny
from .engine_controller import analysis_engine
from django_q.tasks import async_task

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