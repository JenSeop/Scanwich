# scanwich/settings.py
from pathlib import Path
import os
# env 라이브러리
import environ
env = environ.Env()
environ.Env.read_env()

##
BASE_DIR = Path(__file__).resolve().parent.parent

# VT API Key
VIRUSTOTAL_API_KEY = env("VIRUSTOTAL_API_KEY")

# Django APP Key
SECRET_KEY = env("SECRET_KEY")

DEBUG = True

ALLOWED_HOSTS = []

# Front-end Path 세팅
FRONTEND_ADDRESS = os.environ.get('FRONTEND_ADDRESS', 'https://localhost')

# 파일 업로드
# 파일 업로드 크기 제한 설정
DATA_UPLOAD_MAX_MEMORY_SIZE = 1024 * 1024 * 10  # 10MB
FILE_UPLOAD_MAX_MEMORY_SIZE = 1024 * 1024 * 10  # 10MB
## 파일 업로드를 위한 미디어 루트 및 URL 설정
MEDIA_ROOT = os.path.join(BASE_DIR, '..\\..\\','files')
APK_FILE_ROOT = os.path.join(BASE_DIR, '..\\..\\', 'files', 'apk')
APK_ICON_ROOT = os.path.join(BASE_DIR, '..\\..\\', 'files', 'apk_icon')
IMG_ROOT = os.path.join(BASE_DIR, '..\\..\\', 'files', 'img')

# 이메일
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = env("EMAIL_HOST")
EMAIL_PORT = int(env("EMAIL_PORT"))
EMAIL_USE_TLS = env.bool("EMAIL_USE_TLS")
EMAIL_HOST_USER = env("EMAIL_HOST_USER")
EMAIL_HOST_PASSWORD = env("EMAIL_HOST_PASSWORD")

# 로그인/로그아웃 URL
LOGIN_REDIRECT_URL = 'login_success'
LOGOUT_REDIRECT_URL = 'login'
LOGIN_URL = '/api/user/login/'

# 소셜 로그인
SITE_ID = 1
ACCOUNT_EMAIL_REQUIRED = True # 이메일 필수
ACCOUNT_EMAIL_VERIFICATION = 'none' # 이메일 검증 안함

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'django_extensions',
    'corsheaders',
    # DRF
    'rest_framework',
    # Scanwich APP
    'users_origin',
    'users_social',
    'users_file',
    'engine_analysis',
    # KAKAO SOCIAL LOGIN
    'django.contrib.sites',
    'allauth',
    'allauth.account',
    'allauth.socialaccount',
    'allauth.socialaccount.providers.kakao',
]

# 기본 유저 모델 설정
AUTH_USER_MODEL = 'users_origin.CustomUser'

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
    ),
    'DEFAULT_PERMISSION_CLASSES': (
        'rest_framework.permissions.IsAuthenticatedOrReadOnly',
    ), # login작업이외에 다른 views에서 토큰을 사용할 때 필요
}

AUTHENTICATION_BACKENDS = [
    'django.contrib.auth.backends.ModelBackend',
    'allauth.account.auth_backends.AuthenticationBackend',
]

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'allauth.account.middleware.AccountMiddleware',
]

CORS_ALLOW_ALL_ORIGINS = True

# React 애플리케이션의 정적 파일 경로를 따로 설정합니다.
REACT_STATIC_DIR = os.path.join('..\\..\\', 'front-end', 'src', 'pages')

# STATICFILES_DIRS 설정에 React 애플리케이션의 정적 파일 경로를 추가합니다.
STATICFILES_DIRS = [
    REACT_STATIC_DIR,
]

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'scanwich.wsgi.application'

DATABASES = {
    'default': {
        'ENGINE': env("ENGINE"),
        'NAME': env("NAME"),
        'USER': env("USER"),
        'PASSWORD': env("PASSWORD"),
        'HOST': env("HOST"),
        'PORT': env("PORT"),
    }
}

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True

STATIC_URL = '/static/'

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

ROOT_URLCONF = 'scanwich.urls'