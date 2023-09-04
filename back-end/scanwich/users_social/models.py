from django.contrib.auth.models import AbstractUser, Group, Permission
from django.db import models

class CustomUser(AbstractUser):
    profile_image = models.ImageField(upload_to='profile_images/', null=True, blank=True)
    nickname = models.CharField(max_length=50, null=True, blank=True)
    groups = models.ManyToManyField(Group, blank=True, related_name="customuser_set")
    user_permissions = models.ManyToManyField(Permission, blank=True, related_name="customuser_set")
