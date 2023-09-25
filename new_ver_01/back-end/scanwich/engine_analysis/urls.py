# engine_analysis/urls.py

from django.urls import path
from . import views

urlpatterns = [
    path('api/androguard/', views.analyze_apk, name='analyze_apk'),
    path('api/androguard/call/', views.call_files, name='call_files'),
]
