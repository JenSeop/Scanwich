from django.apps import AppConfig


class UsersOriginConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'users_origin'
    
    def ready(self):
        import users_origin.signals