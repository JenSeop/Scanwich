# scanwich/urls.py
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('users_origin.urls')),
    path('', include('users_social.urls')),
    path('', include('users_file.urls')),
]
