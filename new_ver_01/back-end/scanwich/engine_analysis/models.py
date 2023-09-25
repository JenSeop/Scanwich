# engine_analysis/models.py

from django.db import models

class AnalysisResult(models.Model):
    a_apk_name = models.CharField(max_length=255)
    a_apk_path = models.CharField(max_length=255, default='')
