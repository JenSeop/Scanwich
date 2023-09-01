from django.urls import path, include
from django.contrib import admin

urlpatterns = [
    # Django 관리자 페이지
    path('admin/', admin.site.urls),
    # Scanwich Basic Accounts
    path('users/', include('users.urls')),
    # Allauth Accounts
    path('accounts/', include('allauth.urls')),
]