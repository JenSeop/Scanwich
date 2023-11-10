from django.db import models

class AnalyzeReport(models.Model):
# Report  
  r_id = models.AutoField(primary_key=True)
  r_date = models.DateTimeField(auto_now_add=True)
  r_data = models.JSONField(default=dict)
  r_status = models.CharField(max_length=10, default='false')
# User
  u_id = models.CharField(max_length=255, default='')
# File
  f_path = models.FileField(upload_to='apk/')

class AnalyzeQueue(models.Model):
# Queue
  q_id = models.AutoField(primary_key=True)
  q_try = models.IntegerField(default=0)
# Report
  r_id = models.ForeignKey(AnalyzeReport, on_delete=models.CASCADE)
# User
  u_id = models.CharField(max_length=255, default='')
