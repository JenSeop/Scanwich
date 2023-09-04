from pathlib import Path
## 중요 정보 암호화 라이브러리
import environ
env = environ.Env()
environ.Env.read_env()
## end

BASE_DIR = Path(__file__).resolve().parent.parent

SECRET_KEY = env("SECRET_KEY")

DEBUG = True

ALLOWED_HOSTS = []

SITE_ID = 1
# for direct kakao login
SOCIALACCOUNT_LOGIN_ON_GET = True
# redirect path
LOGIN_REDIRECT_URL = '/success'
ACCOUNT_LOGOUT_REDIRECT_URL = 'main_page'
LOGOUT_REDIRECT_URL = '/'
# set of logout
ACCOUNT_LOGOUT_ON_GET = True 

# EMAIL 인증 SMTP 서버
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = env("EMAIL_HOST")
EMAIL_PORT = int(env("EMAIL_PORT"))
EMAIL_USE_TLS = env.bool("EMAIL_USE_TLS")
EMAIL_HOST_USER = env("EMAIL_HOST_USER")
EMAIL_HOST_PASSWORD = env("EMAIL_HOST_PASSWORD")

# Kakao settings
SOCIALACCOUNT_PROVIDERS = {
    'kakao': {
        'APP': {
            'client_id': '4aaee3003f94fb4e62344330b11c9ff1',
            'secret': 'EM8qVoh1sb1BvT89voi3vE0LcpC5ZeRQ',
            'key': ''
        },
        'SCOPE': ['account_email', 'gender'],
        'FIELDS': ['id', 'email', 'gender', 'verified_account'],
        'AUTH_PARAMS': {'auth_type': 'reauthenticate'},
        'METHOD': 'oauth2',
        'VERIFIED_EMAIL': True,
        'VERIFIED_ACCOUNT': True,
        'LOGIN_REDIRECT_URL': '/',
    }
}

# 로그인 인증
AUTHENTICATION_BACKENDS = [
    'users_origin.backends.EmailBackend',
    'django.contrib.auth.backends.ModelBackend',
    'allauth.account.auth_backends.AuthenticationBackend',
]

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'django.contrib.sites',
    ## My App
    'users_origin',
    'users_social',
    # DRF
    'rest_framework',
    'rest_framework.authtoken',
    # for KAKAO LOGIN
    'allauth',
    'allauth.account',
    'allauth.socialaccount',
    'allauth.socialaccount.providers.kakao',
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

STATIC_URL = 'static/'

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'
