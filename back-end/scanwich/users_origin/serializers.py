#users_origin/serializers.py
from django.contrib.auth.models import User # User 모델
from django.contrib.auth.password_validation import validate_password
# Django의 기본 패스워드 검증 도구
from django.contrib.auth import authenticate
# Django의 기본 authenticte 함수,
# 설정한 DefaultAuthBackend인 TokenAuth 방식 유저 인증

from rest_framework import serializers
from rest_framework.authtoken.models import Token # Token 모델
from rest_framework.validators import UniqueValidator # 이메일 중복 방지 검사 도구

from django.core.mail import send_mail
from .models import UserProfile

class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)
    token = serializers.CharField(read_only=True)

    def validate(self, data):
        user = authenticate(username=data['email'], password=data['password'])

        if not user:
            raise serializers.ValidationError("Incorrect email or password.")

        # Check email verification status
        try:
            profile = UserProfile.objects.get(user=user)
            if not profile.email_verified:
                raise serializers.ValidationError("Email not verified. Please verify your email first.")
        except UserProfile.DoesNotExist:
            raise serializers.ValidationError("User profile does not exist.")

        # Generate and return the token for the authenticated user
        token, created = Token.objects.get_or_create(user=user)
        data['token'] = token.key

        return data

class RegisterSerializer(serializers.ModelSerializer): # 회원 가입 시리얼라이저
    email = serializers.EmailField(
        required=True,
        validators=[UniqueValidator(queryset=User.objects.all())] # 이메일 중복 검증
    )
    password = serializers.CharField(
            write_only=True,
            required=True,
            validators=[validate_password] # 패스워드 검증
        )
    password2 = serializers.CharField( # 비밀번호 확인 필드
            write_only=True,
            required=True
        )
    
    class Meta:
        model = User
        fields = ('username', 'password', 'password2', 'email')
    
    def validate(self, data):
        if data['password']!= data['password2']:
            raise serializers.ValidationError(
                {"password": "Password fields didnt match"}
            )    
        return data
    
    def create(self, validated_data):
    # CREATE 요청에 대해 create 메소드 오버라이딩,
    # 유저를 생성, 토큰을 생성
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
        )
        
        user.set_password(validated_data['password'])
        user.save()
        token = Token.objects.create(user=user)
        
        email_subject = 'Email Verification'
        email_body = 'Click the link to verify your email: http://127.0.0.1:8000/users_origin/verify/' + str(user.userprofile.email_verification_token)
        send_mail(email_subject, email_body, 'scanwich.official@gmail.com', [validated_data['email']])
        return user