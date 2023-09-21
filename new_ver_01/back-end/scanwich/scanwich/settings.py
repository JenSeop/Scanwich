# scanwich/settings.py
from pathlib import Path
import os
# env 라이브러리
import environ
env = environ.Env()
environ.Env.read_env()

BASE_DIR = Path(__file__).resolve().parent.parent

# Django APP Key
SECRET_KEY = env("SECRET_KEY")

DEBUG = True

ALLOWED_HOSTS = []

# 파일 업로드
## 파일 업로드를 위한 미디어 루트 및 URL 설정
MEDIA_ROOT = os.path.join(BASE_DIR, '../../','files')

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
    # DRF
    'rest_framework',
    # Scanwich Lib
    'users_origin',
    'users_social',
    'users_file',
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
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'scanwich.urls'

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
