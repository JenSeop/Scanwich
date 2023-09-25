#users_origin/models.py
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin, Group, Permission
from django.db import models
from django.conf import settings
import uuid
from django.utils import timezone

# 추가: _ 함수를 임포트
from django.utils.translation import gettext as _


class TokenJWT(models.Model):
    t_id = models.AutoField(primary_key=True)                                       # 토큰 아이디
    u_id = models.CharField(max_length=150, unique=True)                            # 유저 아이디
    t_key = models.UUIDField(default=uuid.uuid4, editable=False, unique=True)       # UUID 토큰
    t_date = models.DateTimeField(auto_now_add=True)                                # 토큰 생성시간
    t_limit = models.DateTimeField(                                                 # 토큰 만료시간
        default=timezone.now() + timezone.timedelta(hours=1))
    
    def is_token_expired(self):
        # 토큰 만료 확인
        return self.t_limit <= timezone.now()
    
# 이메일 인증 토큰 모델
class EmailVerificationToken(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE) # 관련 사용자
    token = models.UUIDField(default=uuid.uuid4, editable=False, unique=True)       # 유니크 UUID 토큰
    created_at = models.DateTimeField(auto_now_add=True)                            # 토큰 생성 시간

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
    u_date = models.DateTimeField(auto_now_add=True, editable=True) # 유저 가입 일자
    # Django 기본 필드
    is_active = models.BooleanField(default=True)         # 활동 여부
    is_staff = models.BooleanField(default=False)         # 권한 설정
    
    objects = CustomUserManager()
    
    # related_name을 지정하여 역참조 이름 충돌 해결
    groups = models.ManyToManyField(
    Group,
    verbose_name=_('groups'),
    blank=True,
    help_text=_(
        'The groups this user belongs to. A user will get all permissions '
        'granted to each of their groups.'
    ),
    related_name='customuser_groups',  # 수정
    related_query_name='user',
    )
    user_permissions = models.ManyToManyField(
        Permission,
        verbose_name=_('user permissions'),
        blank=True,
        help_text=_('Specific permissions for this user.'),
        related_name='customuser_permissions',  # 수정
        related_query_name='user',
    )


    USERNAME_FIELD = 'u_id'  # 로그인 필드를 아이디로 변경
    REQUIRED_FIELDS = ['u_email']

    def __str__(self):
        return self.u_email