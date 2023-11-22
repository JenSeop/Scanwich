from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import AnalyzeReport, AnalyzeQueue
from django_q.models import OrmQ
