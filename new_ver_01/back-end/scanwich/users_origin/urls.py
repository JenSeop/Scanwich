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
    ## 인증 성공 페이지 (test)
    path('api/user/verification_success/', verification_success_page, name='verification_success'), # 단위 테스트용
    ## 인증 에러 페이지 (test)
    path('api/user/verification_error/', verification_failed_page, name='verification_error'), # 단위 테스트용
    ## 인증 실패 페이지(test)
    path('api/user/verification_failed/', token_not_found_page, name='verification_failed'), # 단위 테스트용
# 로그인/로그아웃
    ## 로그인
    path('api/user/login/', CustomLoginView.as_view(), name='login'), # API
    ## 로그아웃
    path('api/user/logout/', LogoutView.as_view(), name='logout'), # API
    ## 로그인 성공 페이지 (test)
    path('api/user/home', login_success, name='login_success'), # 단위 테스트용
# 아이디/비밀번호 찾기
    ## 아이디 찾기
    path('api/user/find_id/', find_id_email, name='find_id_email'), # API
    ## 아이디 찾기 페이지 (test)
    path('api/user/find_id_page/', find_id_page, name='find_id_page'), # 단위 테스트용
    ## 비밀번호 찾기
    path('api/user/reset_pw/', ResetPasswordAPIView.as_view(), name='reset_pw'), # API
    ## 비밀번호 찾기 페이지 (test)
    path('api/user/reset_pw_page/', reset_pw_page, name='reset_pw_page'), # 단위 테스트용
]