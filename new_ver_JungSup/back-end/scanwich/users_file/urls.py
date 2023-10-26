# urls.py
from django.urls import path
from . import views

urlpatterns = [
    # 파일 업로드 (only apk)
    path('api/file/upload/', views.FileUploader, name='FileUploader'),
    # 파일 리스트 (all)
    path('api/file/list/all', views.file_list_all, name='file_list_all'),
    # 파일 리스트 (not deleted)
    path('api/file/list/nd', views.file_list_nd, name='file_list_nd'),
    # 파일 삭제 (상태만 변경)
    path('api/file/change/<int:f_id>/', views.file_change, name='file_change'),
    # 파일 삭제 (실제 삭제)
    path('api/file/delete/<int:f_id>/', views.file_delete, name='file_delete'),
]
