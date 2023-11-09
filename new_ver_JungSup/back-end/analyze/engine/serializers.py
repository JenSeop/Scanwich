from rest_framework import serializers
from .models import AnalyzeReport, AnalyzeQueue

class AnalyzeReportSerializer(serializers.ModelSerializer):
    class Meta:
        model = AnalyzeReport
        fields = ['r_id', 'r_date', 'r_data', 'r_status', 'u_id', 'f_path']

class AnalyzeQueueSerializer(serializers.ModelSerializer):
    class Meta:
        model = AnalyzeQueue
        fields = ['q_id', 'r_id', 'u_id']