# users_origin/views.py
from rest_framework.response import Response
from rest_framework import generics
from rest_framework import status
from rest_framework.decorators import api_view
from django.shortcuts import render, redirect
from .utils import send_verification_email
from .serializers import UserSerializer
from rest_framework.permissions import AllowAny
from django.urls import reverse
from django.core.mail import send_mail
from django.contrib.sites.shortcuts import get_current_site
from django.template.loader import render_to_string
from django.utils.http import urlsafe_base64_encode
from django.utils.encoding import force_bytes
from django.conf import settings
from .models import CustomUser, EmailVerificationToken

# 회원 가입
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
                "message": "User created successfully! Please check your email to confirm your registration."
            }, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# 이메일 인증
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

def verification_success_page(request):
    return render(request, 'verification_success.html')

def verification_failed_page(request):
    return render(request, 'verification_error.html')

def token_not_found_page(request):
    return render(request, 'verification_failed.html')