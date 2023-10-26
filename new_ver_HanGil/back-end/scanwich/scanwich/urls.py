# scanwich/urls.py
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('api/admin/', admin.site.urls),
    path('', include('users_origin.urls')),
    path('', include('users_social.urls')),
    path('', include('users_file.urls')),
    path('', include('engine_analysis.urls')),
]
