# accounts/signals.py

from allauth.socialaccount.models import SocialAccount
from allauth.socialaccount.signals import social_account_updated
from django.dispatch import receiver
from .models import CustomUser

@receiver(social_account_updated, sender=SocialAccount)
def update_user_profile(sender, instance, **kwargs):
    user = instance.user  # CustomUser instance
    social_account = instance  # SocialAccount instance
    extra_data = social_account.extra_data  # Dictionary with user data provided by Kakao
    
    # Extract necessary data from extra_data
    profile_image_url = extra_data.get('profile_image_url', '')
    nickname = extra_data.get('nickname', '')
    
    # Update CustomUser instance
    user.profile_image = profile_image_url
    user.nickname = nickname
    user.save()
