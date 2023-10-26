# users_file/views.py
from django.shortcuts import render, redirect, get_object_or_404
from rest_framework import status
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.response import Response
from .forms import FileUploadForm
from .models import UploadedFile
from rest_framework.authentication import SessionAuthentication, TokenAuthentication
from rest_framework.permissions import AllowAny
import os
from django.conf import settings

def file_upload(request):
    if request.method == 'POST':
        form = FileUploadForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()  # 모델 객체를 저장하면 모델 내의 save 메서드가 호출되어 해시 값이 계산 및 저장됨
            return redirect('file_list_all')  # 파일 목록 페이지로 리다이렉트
    else:
        form = FileUploadForm()
    return render(request, 'file_upload.html', {'form': form})

# 허용할 확장자 목록 설정
ALLOWED_EXTENSIONS = ['apk', 'png', 'hwp']

# 파일 확장자를 확인하는 함수
def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@api_view(['POST'])
@authentication_classes([SessionAuthentication, TokenAuthentication])
@permission_classes([AllowAny])
def FileUploader(request):
    if request.method == 'POST' and 'file' in request.FILES:
        uploaded_file = request.FILES['file']

        if allowed_file(uploaded_file.name):

            with open(os.path.join(settings.APK_FILE_ROOT, uploaded_file.name), 'wb+') as destination:
                for chunk in uploaded_file.chunks():
                    destination.write(chunk)

            # 파일 업로드가 성공한 경우 응답을 반환합니다.
            return Response({'message': 'File uploaded successfully'}, status=status.HTTP_201_CREATED)
        else:
            # 확장자가 허용되지 않는 경우 에러 응답을 반환합니다.
            return Response({'error': 'Invalid file extension'}, status=status.HTTP_400_BAD_REQUEST)
    else:
        return Response({'error': 'No file provided'}, status=status.HTTP_400_BAD_REQUEST)

def file_list_all(request):
    # 모든 파일 목록 가져오기
    files = UploadedFile.objects.all()
    return render(request, 'file_list_all.html', {'files': files})

def file_list_nd(request):
    # 삭제되지 않은 파일 목록만 가져오기
    files = UploadedFile.objects.filter(f_deleted=False)
    return render(request, 'file_list_nd.html', {'files': files})

def file_delete(request, f_id):
    file_instance = get_object_or_404(UploadedFile, pk=f_id)

    if request.method == 'POST':
        # 파일 및 레코드 삭제
        file_instance.delete()
        return redirect('file_list_all')  # 파일 목록 페이지로 리다이렉트

    return render(request, 'file_delete.html', {'file_instance': file_instance})

def file_change(request, f_id):
    file_instance = get_object_or_404(UploadedFile, pk=f_id)

    if request.method == 'POST':
        # 파일 상태 변경
        file_instance.f_deleted = True  # 파일을 삭제 상태로 변경
        file_instance.save()
        return redirect('file_list_all')  # 파일 목록 페이지로 리다이렉트

    return render(request, 'file_change.html', {'file_instance': file_instance})