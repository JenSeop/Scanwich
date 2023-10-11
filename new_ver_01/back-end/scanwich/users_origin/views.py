# users_origin/views.py
from rest_framework.response import Response
from rest_framework import generics
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from django.shortcuts import render, redirect
from .utils import send_verification_email, send_find_id_email
from .serializers import UserSerializer
from rest_framework.permissions import AllowAny
from .models import CustomUser, EmailVerificationToken
from django.contrib.auth.views import LogoutView
from django.urls import reverse_lazy
from django.contrib import messages
from django.contrib.auth import get_user_model
from rest_framework.views import APIView
from django.contrib.auth import login, logout
from django.http import JsonResponse
from uuid import uuid4
from .models import TokenJWT
from django.contrib.auth import authenticate, login
from rest_framework.authtoken.models import Token
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.authentication import SessionAuthentication, TokenAuthentication

User = get_user_model()

# 1. 회원 가입
class UserRegisterView(generics.CreateAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]  # 인증 요구 해제
    
    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            
            # 토큰 생성 및 저장
            token = EmailVerificationToken.objects.create(user=user)
            
            # 이메일 발송
            send_verification_email(user, token.token)  # <== 이 부분이 수정되었습니다.

            return Response({
                "user": UserSerializer(user, context=self.get_serializer_context()).data,
                "message": "201"
            }, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

## 1-1. 이메일 인증
@api_view(['GET'])
def verify_email(request, token):
    try:
        verification = EmailVerificationToken.objects.get(token=token)
        
        # 유효성 검사
        if verification:
            user = verification.user
            user.u_verif = True
            user.save()
            verification.delete() # 인증 완료 토큰 삭제
            return redirect('verification_success')
            
    except EmailVerificationToken.DoesNotExist:
        return redirect('verification_error')
    
    return redirect('verification_failed')  # 토큰이 존재하지만 다른 문제로 인증 실패

## 1-2. 이메일 재발송
@api_view(['POST'])
def resend_verification_email(request):
    # POST 요청의 이메일 주소를 기반으로 재발송 처리
    if request.method == 'POST':
        user_email = request.data.get('u_email')
        
        try:
            user = CustomUser.objects.get(u_email=user_email)
            
            # 기존 토큰 삭제
            EmailVerificationToken.objects.filter(user=user).delete()
            
            # 새 토큰 생성 및 저장
            token_obj = EmailVerificationToken(user=user)
            token_obj.save()
            
            # 이메일 발송
            send_verification_email(user, token_obj.token)
            
            return Response({"message": "인증 메일이 발송되었습니다."}, status=status.HTTP_200_OK)
        
        except CustomUser.DoesNotExist:
            return Response({"error": "해당 이메일 주소로 등록된 사용자가 없습니다."}, status=status.HTTP_400_BAD_REQUEST)
    
    return Response({"error": "Invalid request method"}, status=status.HTTP_400_BAD_REQUEST)

## 1-3. 인증 성공 페이지 (Back-end 모듈 테스트용)
def verification_success_page(request):
    return render(request, 'verification_success.html')
## 1-4. 인증 에러 페이지 (Back-end 모듈 테스트용)
def verification_failed_page(request):
    return render(request, 'verification_error.html')
## 1-5. 인증 실패 페이지 (Back-end 모듈 테스트용)
def token_not_found_page(request):
    return render(request, 'verification_failed.html')

## 2-2. JWT 로그인 v2
@api_view(['POST'])  # POST 요청 허용
@authentication_classes([SessionAuthentication, TokenAuthentication])
@permission_classes([AllowAny])
def JWTLogin(request):
    u_id = request.data.get('u_id')
    password = request.data.get('password')

    user = authenticate(request, u_id=u_id, password=password)
    if user is not None:
        if user.u_verif:  # 이메일 인증 여부 확인
            login(request, user)

            # 토큰 생성 및 저장
            token = str(uuid4())  # UUID 토큰 생성
            user_token, created = TokenJWT.objects.get_or_create(u_id=user.u_id)
            user_token.t_key = token
            user_token.save()
            return Response({'token': token})
        else:
            return Response({'error': '이메일 인증을 먼저 완료해야 로그인이 가능합니다.'}, status=status.HTTP_400_BAD_REQUEST)
    else:
        return Response({'error': '유효하지 않은 사용자 정보입니다.'}, status=status.HTTP_401_UNAUTHORIZED)

def JWTValid(request):
    u_id = request.data.get('u_id')

    try:
        token = TokenJWT.objects.get(u_id=u_id)

        if token.is_token_expired():
            logout(request)
            return JsonResponse({"message": "토큰이 만료되었습니다."})
        else:
            return JsonResponse({"message": "토큰이 유효합니다."})

    except TokenJWT.DoesNotExist:
        return JsonResponse({"message": "토큰을 찾을 수 없습니다."})
    

## 2-3. JWT 로그아웃
class JWTLogout(LogoutView):
    def post(self, request):
        if request.user.is_authenticated:
            # 사용자 로그아웃 처리
            logout(request)
            
            # 토큰 삭제
            user_token = TokenJWT.objects.filter(u_id=request.user.u_id).first()
            if user_token:
                user_token.delete()
            
            return JsonResponse({'message': '로그아웃 성공'})
        else:
            return JsonResponse({'message': '로그인 상태가 아닙니다.'}, status=400)

# 3. ID/PW 찾기

## 3-1. ID 찾기
@api_view(['POST'])
@permission_classes([AllowAny,])
def find_id_email(request):
    if request.method == 'POST':
        user_email = request.data.get('u_email')
        
        try:
            user = CustomUser.objects.get(u_email=user_email)
            
            # 이메일 발송
            message = f'{user.u_id}'
            send_find_id_email(user, message)
            
            return Response({"message": "메일이 발송되었습니다."}, status=status.HTTP_200_OK)
        
        except CustomUser.DoesNotExist:
            return Response({"error": "해당 이메일 주소로 등록된 사용자가 없습니다."}, status=status.HTTP_400_BAD_REQUEST)
    
    return Response({"error": "Invalid request method"}, status=status.HTTP_400_BAD_REQUEST)

## 3-2. ID 찾기 페이지 (Back-end 모듈 테스트용)
def find_id_page(request):
    return render(request, 'find_id_page.html')

## 3-3. PW 재설정
class ResetPasswordAPIView(APIView):
    permission_classes = [AllowAny]  # 인증 요구 해제
    def post(self, request):
        u_id = request.data.get('u_id')
        u_email = request.data.get('u_email')
        new_password = request.data.get('new_password')  # 사용자로부터 입력받은 새로운 비밀번호
        
        try:
            user = CustomUser.objects.get(u_id=u_id, u_email=u_email)
            
            # 새로운 비밀번호로 업데이트하고 저장
            user.set_password(new_password)
            user.save()
            
            return Response({"message": "비밀번호가 초기화되었습니다."}, status=status.HTTP_200_OK)
        
        except CustomUser.DoesNotExist:
            return Response({"error": "유저를 찾을 수 없습니다."}, status=status.HTTP_404_NOT_FOUND)
        
## 3-4. PW 찾기 페이지 (Back-end 모듈 테스트용)
def reset_pw_page(request):
    return render(request, 'reset_pw_page.html')