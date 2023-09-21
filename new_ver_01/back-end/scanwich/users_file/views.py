# users_file/views.py
from django.shortcuts import render, redirect, get_object_or_404
from .forms import FileUploadForm
from .models import UploadedFile

def file_upload(request):
    if request.method == 'POST':
        form = FileUploadForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()  # 모델 객체를 저장하면 모델 내의 save 메서드가 호출되어 해시 값이 계산 및 저장됨
            return redirect('file_list_all')  # 파일 목록 페이지로 리다이렉트
    else:
        form = FileUploadForm()
    return render(request, 'file_upload.html', {'form': form})

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