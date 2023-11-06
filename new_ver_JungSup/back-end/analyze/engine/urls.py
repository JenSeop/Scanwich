from django.urls import path
from . import views

urlpatterns = [
    path('analyze/engine/call/', views.queue_analysis, name='queue_analysis'),
    path('analyze/report/all/', views.get_analyze_reports, name='get_analyze_reports'),
    path('analyze/report/user/<str:u_id>/', views.get_user_analyze_reports, name='get_user_analyze_reports'),
    path('analyze/get_analyze_reports_re/', views.get_analyze_reports_re, name='get_analyze_reports_re'),
    path('analyze/report/<int:r_id>/', views.report_detail, name='report_detail'),
]
