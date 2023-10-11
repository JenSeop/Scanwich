# users_origin/urls.py

from django.urls import path, include
from django.contrib.auth.views import LogoutView
from .views import (
# 회원가입
    ResetPasswordAPIView,
    UserRegisterView,
    resend_verification_email,
    verification_success_page,
    verification_failed_page,
    token_not_found_page,
    verify_email,
# 로그인/로그아웃
    CustomLoginView,
    login_success,
    JWTLogout,
    JWTLogin,
# 아이디/비밀번호 찾기
    find_id_email,
    find_id_page,
    reset_pw_page,
)

urlpatterns = [
# 회원가입
    path('api/user/register/', UserRegisterView.as_view(), name='register'), # API
# 이메일 인증
    ## 인증 토큰 주소
    path('api/user/verify-email/<uuid:token>/', verify_email, name='verify-email'), # API
    ## 재인증
    path('api/user/resend-verification/', resend_verification_email, name='resend_verification_email'), # API
# 로그인/로그아웃
    ## JWT 로그인
    path('api/user/jwtlogin/', JWTLogin, name='jwtlogin'), # API
    ## JWT 로그아웃
    path('api/user/jwtlogout/', JWTLogout.as_view(), name='jwtlogout'), # API
# 아이디/비밀번호 찾기
    ## 아이디 찾기
    path('api/user/find_id/', find_id_email, name='find_id_email'), # API
    ## 비밀번호 찾기
    path('api/user/reset_pw/', ResetPasswordAPIView.as_view(), name='reset_pw'), # API
]