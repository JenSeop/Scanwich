# users_origin/urls.py

from django.urls import path
from .views import (
    UserRegisterView,
    verify_email,
    resend_verification_email,
    verification_success_page,
    verification_failed_page,
    token_not_found_page,
)

urlpatterns = [
    # 회원가입
    path('api/register/', UserRegisterView.as_view(), name='register'),
    # 이메일 인증
    path('api/verify-email/<uuid:token>/', verify_email, name='verify-email'), # 인증 토큰 주소
    path('api/resend-verification/', resend_verification_email, name='resend_verification_email'), # 재인증
    path('api/verification_success/', verification_success_page, name='verification_success'), # 인증 성공
    path('api/verification_error/', verification_failed_page, name='verification_error'), # 인증 에러
    path('api/verification_failed/', token_not_found_page, name='verification_failed'), # 인증 실패
]