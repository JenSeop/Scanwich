# users_social/apps.py

from django.apps import AppConfig


class UserSocialConfig(AppConfig):
    name = 'users_social'

    def ready(self):
        import users_social.signals