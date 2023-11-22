# settings.py
import os
from pathlib import Path
import environ
env = environ.Env()
environ.Env.read_env()

MEDIA_ROOT = "../../files/"
MEDIA_URL = '/media/'
BASE_DIR = Path(__file__).resolve().parent.parent
ICON_STORAGE_PATH = os.path.join(BASE_DIR.parent.parent, 'files', 'apk_icon')


SECRET_KEY = env("SECRET_KEY")

VIRUSTOTAL_API_KEY = env("VIRUSTOTAL_API_KEY")
VIRUSTOTAL_API_KEY_SPAIR = env("VIRUSTOTAL_API_KEY_SPAIR")

SESSION_ENGINE = "django.contrib.sessions.backends.cache" 
SESSION_COOKIE_NAME = "scanwich"

DEBUG = True

ALLOWED_HOSTS = []


INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'django_extensions',
    'corsheaders',
    # Django Q
    'django_q',
    # DRF
    'rest_framework',
    # Analyze APP
    'engine',
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
]

ROOT_URLCONF = 'analyze.urls'

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

WSGI_APPLICATION = 'analyze.wsgi.application'

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

Q_CLUSTER = {
    'name': 'DjangORM',
    'workers': 16,
    'timeout': 120,
    'retry': 120,
    'queue_limit': 100,
    'bulk': 20,
    'orm': 'default'
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
