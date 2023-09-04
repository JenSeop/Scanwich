#users_origin/views.py
from django.contrib.auth.models import User
from .serializers import RegisterSerializer, LoginSerializer
from .models import UserProfile
from rest_framework import generics, status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth import logout
from django.shortcuts import redirect

class LoginView(generics.GenericAPIView):
    serializer_class = LoginSerializer

    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        token = serializer.validated_data.get('token')
        return Response({"token": token}, status=status.HTTP_200_OK)

def user_logout(request):
    logout(request)
    return redirect('../login/')

class RegisterView(generics.CreateAPIView):
    # CreateAPIView(generics) 사용 구현
    queryset = User.objects.all()
    serializer_class = RegisterSerializer

@api_view(['GET'])
def verify_email(request, token):
    try:
        profile = UserProfile.objects.get(email_verification_token=token)
        profile.email_verified = True
        profile.save()
        return Response({'message': 'Email verified successfully'}, status=status.HTTP_200_OK)
    except UserProfile.DoesNotExist:
        return Response({'error': 'Invalid token'}, status=status.HTTP_400_BAD_REQUEST)