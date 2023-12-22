# users_origin/serializers.py

from rest_framework import serializers
from .models import CustomUser
import uuid

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        # 직렬화 및 역직렬화 대상 필드
        fields = ('u_id', 'u_email', 'password')
        # 비밀번호 쓰기 전용 설정
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        # validated_data에서 비밀번호 추출
        password = validated_data.pop('password')
        # 사용자 객체 생성
        user = CustomUser(**validated_data)
        # 비밀번호 설정
        user.set_password(password)
        user.save()
        return user

class TokenJWTSerializer(serializers.Serializer):
    u_id = serializers.CharField(max_length=150)
    t_key = serializers.UUIDField()
    
    def validate_t_key(self, value):
        try:
            # 입력된 값이 UUID 형식인지 확인
            uuid.UUID(str(value))
        except ValueError:
            # UUID 형식이 아닌 경우 예외 발생
            raise serializers.ValidationError("t_key는 UUID 형식이어야 합니다.")
        
        return value