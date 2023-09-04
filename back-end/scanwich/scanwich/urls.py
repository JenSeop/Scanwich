from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    # Scanwich Basic Accounts
    path('users_origin/', include('users_origin.urls')),
]
