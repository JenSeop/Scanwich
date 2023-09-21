# users_file/models.py
from django.db import models
import hashlib

class UploadedFile(models.Model):
    f_id = models.AutoField(primary_key=True)  # 파일 아이디 (자동으로 증가하는 정수)
    f_path = models.FileField(upload_to='apk/')  # 'uploads/' 업로드 파일 저장 경로
    f_date = models.DateTimeField(auto_now_add=True)  # 파일 업로드 시간
    u_id = models.CharField(max_length=150)  # 유저 아이디
    f_name = models.CharField(max_length=255)  # 파일 이름
    f_type = models.CharField(max_length=10)  # 파일 확장자
    f_size = models.PositiveBigIntegerField(null=True, blank=True, default=None) # 파일 사이즈
    f_sha256 = models.CharField(max_length=64, blank=True, null=True)  # SHA-256 해시 값
    f_md5 = models.CharField(max_length=32, blank=True, null=True)  # MD5 해시 값을 저장할 필드 추가
    f_deleted = models.CharField(max_length=255, blank=True, null=True) # 파일 삭제 필드

    # 파일 사이즈를 저장하기 위한 save 메서드
    def save(self, *args, **kwargs):
        # 파일 이름 및 확장자 추출
        file_name = self.f_path.name
        file_name_parts = file_name.split('.')
        if len(file_name_parts) > 1:
            self.f_name = '.'.join(file_name_parts[:-1])  # 파일 이름
            self.f_type = file_name_parts[-1]  # 파일 확장자
        else:
            self.f_name = file_name  # 파일 이름 (확장자 없음)
            self.f_type = ''

        # 파일 사이즈 저장 (바이트 단위)
        if self.f_path:
            self.f_size = self.f_path.size
            
        # SHA-256 해시 및 MD5 해시 계산 및 저장
        if self.f_path:
            sha256_hash = hashlib.sha256()
            md5_hash = hashlib.md5()

            for chunk in self.f_path.chunks():
                sha256_hash.update(chunk)
                md5_hash.update(chunk)

            self.f_sha256 = sha256_hash.hexdigest()
            self.f_md5 = md5_hash.hexdigest()

        super(UploadedFile, self).save(*args, **kwargs)