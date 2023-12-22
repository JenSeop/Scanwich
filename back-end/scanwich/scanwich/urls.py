# scanwich/urls.py
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('client/admin/', admin.site.urls),
    path('', include('users_origin.urls')),
]
