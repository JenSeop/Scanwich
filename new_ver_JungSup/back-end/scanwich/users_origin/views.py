# users_origin/views.py
from rest_framework.response import Response
from rest_framework import generics
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from django.shortcuts import render
from .utils import send_verification_email, send_find_id_email, random_password_string, send_reset_password_email, check_password
from .serializers import UserSerializer
from rest_framework.permissions import AllowAny
from .models import CustomUser, EmailVerificationToken
from django.contrib.auth import get_user_model
from rest_framework.views import APIView
from django.contrib.auth import login, logout
from django.http import JsonResponse
from uuid import uuid4
from .models import TokenJWT
from django.contrib.auth import authenticate, login
from rest_framework.decorators import api_view, permission_classes
from django.http import HttpResponseRedirect
from django.utils import timezone
import os
from .serializers import TokenJWTSerializer

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
    frontend_address = os.environ.get('FRONTEND_ADDRESS', '')
    try:
        verification = EmailVerificationToken.objects.get(token=token)
        
        # 유효성 검사
        if verification:
            user = verification.user
            user.u_verif = True
            user.save()
            verification.delete() # 인증 완료 토큰 삭제
            
            # 프론트엔드 주소로 리다이렉션
            return HttpResponseRedirect(f'{frontend_address}/email/verif/201')
            
    except EmailVerificationToken.DoesNotExist:
        return HttpResponseRedirect(f'{frontend_address}/email/verif/502')
    
    return HttpResponseRedirect(f'{frontend_address}/email/verif/424')

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

## 2-1. JWT 로그인 v2
@api_view(['POST'])
@permission_classes([AllowAny])
def JWTLogin(request):
    u_id = request.data.get('u_id')
    password = request.data.get('password')

    user = authenticate(request, u_id=u_id, password=password)
    if user is not None:
        if user.u_verif:  # 이메일 인증 여부 확인
            login(request, user)

            # 토큰 만료 시간을 1시간으로 설정
            expiration_time = timezone.now() + timezone.timedelta(hours=1)

            # 기존에 있는 토큰을 가져오거나 생성합니다.
            user_token, created = TokenJWT.objects.get_or_create(u_id=user.u_id)
            user_token.t_limit = expiration_time

            # t_date 필드를 현재 시간으로 업데이트
            user_token.t_date = timezone.now()

            user_token.save()

            # 새로운 UUID 토큰을 생성하고 반환합니다.
            token = str(uuid4())  # 새로운 UUID 토큰 생성
            user_token.t_key = token
            user_token.save()

            # u_id에 해당하는 사용자의 이메일 가져오기
            user_email = user.u_email

            return Response({'token': token, 'u_id': u_id, 'email': user_email})
        else:
            return Response({'error': '이메일 인증을 먼저 완료해야 로그인이 가능합니다.'}, status=status.HTTP_400_BAD_REQUEST)
    else:
        return Response({'error': '유효하지 않은 사용자 정보입니다.'}, status=status.HTTP_401_UNAUTHORIZED)

## 2-2. JWT 로그아웃 v2
@permission_classes([AllowAny])
class JWTLogout(APIView):
    def post(self, request):
        # 전달된 데이터를 시리얼라이즈합니다.
        serializer = TokenJWTSerializer(data=request.data)

        if serializer.is_valid():
            # 시리얼라이저가 유효한 경우, u_id와 t_key 값을 가져옵니다.
            u_id = serializer.validated_data['u_id']
            t_key = serializer.validated_data['t_key']

            # 해당 u_id와 t_key에 대한 토큰을 삭제합니다.
            try:
                token = TokenJWT.objects.get(u_id=u_id, t_key=t_key)
                token.delete()
                return Response({'message': '로그아웃 성공'})
            except TokenJWT.DoesNotExist:
                return Response({'message': '유효하지 않은 토큰입니다.'}, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
@permission_classes([AllowAny])
def check_token_validity(request, t_key):
    if request.method == 'GET':
        try:
            token = TokenJWT.objects.get(t_key=t_key)
            if token.is_token_exist():
                return Response({'message': 'Token expired'}, status=status.HTTP_401_UNAUTHORIZED)
            else:
                return Response({'message': 'Token is valid'}, status=status.HTTP_200_OK)
        except TokenJWT.DoesNotExist:
            return Response({'message': 'Token not found'}, status=status.HTTP_404_NOT_FOUND)

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

## 3-3. PW 재설정
class ResetPasswordAPIView(APIView):
    permission_classes = [AllowAny]  # 인증 요구 해제
    
    def post(self, request):
        u_id = request.data.get('u_id')
        u_email = request.data.get('u_email')
        current_password = request.data.get('current_password')  # 사용자로부터 입력받은 현재 비밀번호
        new_password = request.data.get('new_password')  # 사용자로부터 입력받은 새로운 비밀번호
        
        try:
            user = CustomUser.objects.get(u_id=u_id, u_email=u_email)
            
            # 현재 비밀번호가 일치하는지 확인
            if not check_password(current_password, user.password):
                return Response({"error": "현재 비밀번호가 일치하지 않습니다."}, status=status.HTTP_400_BAD_REQUEST)

            # 새로운 비밀번호로 업데이트하고 저장
            user.set_password(new_password)
            user.save()
            
            return Response({"message": "비밀번호가 초기화되었습니다."}, status=status.HTTP_200_OK)
        
        except CustomUser.DoesNotExist:
            return Response({"error": "유저를 찾을 수 없습니다."}, status=status.HTTP_404_NOT_FOUND)
        
## 3-4. PW 이메일 인증 방식
@api_view(['POST'])
@permission_classes([AllowAny,])
def reset_password_by_email(request):
    email = request.data.get('u_email')
    try:
        user = User.objects.get(u_email=email)
    except User.DoesNotExist:
        return Response({'error': '해당 이메일을 가진 사용자를 찾을 수 없습니다.'}, status=400)

    new_password = random_password_string()
    user.set_password(new_password)
    user.save()

    send_reset_password_email(user, new_password)

    return Response({'message': '새 비밀번호가 이메일로 전송되었습니다.'})