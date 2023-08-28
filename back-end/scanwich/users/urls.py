#users/signals.py
from django.urls import path
from .views import RegisterView, LoginView, verify_email, user_logout

urlpatterns = [
    path('register/', RegisterView.as_view()),
    path('login/', LoginView.as_view()),
    path('user_logout/', user_logout, name='user_logout'),
    path('verify-email/<str:token>/', verify_email, name='verify-email'),
]