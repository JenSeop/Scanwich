from django.shortcuts import render
from django.contrib.auth.hashers import make_password
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import User
from .serializers import UserSerializer
import re

@api_view(['GET', 'POST'])
def signup(request):
    if request.method == 'GET':
        return render(request, 'signup.html')
    elif request.method == 'POST':
        serializer = UserSerializer(data=request.data)
        
        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        userEmail = serializer.validated_data['userEmail']
        userPW = serializer.validated_data['userPW']
        checkPW = request.data.get('checkPW')

        if User.objects.filter(userEmail=userEmail).exists():
            return Response({"detail": "이미 존재하는 이메일입니다."}, status=status.HTTP_400_BAD_REQUEST)

        regexEmail = '^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9_-]+\.[a-zA-Z0-9-.]+$'
        if not re.match(regexEmail, userEmail):
            return Response({"detail": "이메일 형식에 일치하지 않습니다."}, status=status.HTTP_400_BAD_REQUEST)

        if userPW != checkPW:
            return Response({"detail": "비밀번호가 일치하지 않습니다."}, status=status.HTTP_400_BAD_REQUEST)

        serializer.validated_data['userPW'] = make_password(userPW)
        serializer.save()

        return Response({"detail": "회원가입 완료."}, status=status.HTTP_201_CREATED)
