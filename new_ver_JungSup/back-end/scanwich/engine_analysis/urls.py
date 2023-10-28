# engine_analysis/urls.py

from django.urls import path
from . import views

urlpatterns = [
    path('client/engine/androguard/', views.analyze_apk, name='analyze_apk'),
    path('client/engine/androguard/call/', views.call_files, name='call_files'),
    path('client/engine/androguard/result/', views.result, name='result'),  # 결과 페이지
]