#users/models.py
from django.db import models
from django.contrib.auth.models import User

from django.db.models.signals import post_save
from django.dispatch import receiver

import uuid
from django.utils.crypto import get_random_string

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    email_verified = models.BooleanField(default=False)
    email_verification_token = models.CharField(max_length=32, unique=True, blank=True, null=True)
    
    def save(self, *args, **kwargs):
        if not self.email_verification_token:
            self.email_verification_token = get_random_string(32)  # 32자리의 랜덤 문자열 생성
        super().save(*args, **kwargs)

@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        UserProfile.objects.create(user=instance)

@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    if hasattr(instance, 'profile'):
        instance.profile.save()
