from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.db import models

class CustomUserManager(BaseUserManager):
    def create_user(self, u_email, password=None, **extra_fields):
        if not u_email:
            raise ValueError('Email Error')
        u_email = self.normalize_email(u_email)
        user = self.model(u_email=u_email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, u_email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        return self.create_user(u_email, password, **extra_fields)

class CustomUser(AbstractBaseUser, PermissionsMixin):
    # Scanwich 필드
    u_id = models.CharField(max_length=150, unique=True)  # 유저 아이디
    u_email = models.EmailField(unique=True)              # 유저 이메일
    u_verif = models.BooleanField(default=False)          # 이메일 인증 여부
    u_date = models.DateTimeField(auto_now_add=True)      # 유저 가입 일자
    # Django 기본 필드
    is_active = models.BooleanField(default=True)         # 활동 여부
    is_staff = models.BooleanField(default=False)         # 권한 설정
    
    objects = CustomUserManager()

    USERNAME_FIELD = 'u_id'  # 로그인 필드를 아이디로 변경
    REQUIRED_FIELDS = ['u_email']


    def __str__(self):
        return self.u_email
