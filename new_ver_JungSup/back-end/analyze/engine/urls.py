from django.urls import path
from . import views

urlpatterns = [
    path('analyze/engine/call/', views.queue_analysis, name='queue_analysis'),
]
