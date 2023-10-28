# users_origin/urls.py

from django.urls import path, include
from django.contrib.auth.views import LogoutView
from .views import (
# 회원가입
    UserRegisterView,
    resend_verification_email,
    verify_email,
# 로그인/로그아웃
    JWTLogout,
    JWTLogin,
# 아이디/비밀번호 찾기
    find_id_email,
    reset_password_by_email,
    ResetPasswordAPIView,
)

urlpatterns = [
# 회원가입
    path('client/user/register/', UserRegisterView.as_view(), name='register'), # API
# 이메일 인증
    ## 인증 토큰 주소
    path('client/user/verify-email/<uuid:token>/', verify_email, name='verify-email'), # API
    ## 재인증
    path('client/user/resend-verification/', resend_verification_email, name='resend_verification_email'), # API
# 로그인/로그아웃
    ## JWT 로그인
    path('client/user/jwtlogin/', JWTLogin, name='jwtlogin'), # API
    ## JWT 로그아웃
    path('client/user/jwtlogout/', JWTLogout.as_view(), name='jwtlogout'), # API
# 아이디/비밀번호 찾기
    ## 아이디 찾기
    path('client/user/find_id/', find_id_email, name='find_id_email'), # API
    ## 랜덤 비밀번호 이메일 발송
    path('client/user/find_pw/', reset_password_by_email, name='find_pw_email'),  # API
# 아이디/비밀번호 변경
    path('client/user/reset_pw/', ResetPasswordAPIView.as_view(), name='reset_pw'), # API
]