from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from django.views import View
import requests
from django.contrib.auth import login
from allauth.socialaccount.models import SocialApp, SocialAccount
from .models import CustomUser
from django.http import JsonResponse  # 추가해야하는 import

def main_page_view(request):
    return render(request, 'main_page.html')

def kakao_login_view(request):
    return render(request, 'kakao_login.html')

@login_required
def profile_view(request):
    return render(request, 'kakao_profile.html')

class KakaoLoginCallback(View):
    @method_decorator(csrf_exempt)
    def dispatch(self, *args, **kwargs):
        return super(KakaoLoginCallback, self).dispatch(*args, **kwargs)  # 수정

    def post(self, request):
        try:
            access_token = request.POST.get('access_token')

            # 카카오 유저 정보 요청 URL
            url = "https://kapi.kakao.com/v2/user/me"
            headers = {
                "Authorization": f"Bearer {access_token}"
            }
            response = requests.get(url, headers=headers)
            user_info = response.json()

            # 유저 정보를 처리하는 로직 (예: Django User 모델과 연동)
            kakao_user_id = user_info['id']
            nickname = user_info['properties']['nickname']
            profile_image_url = user_info['properties'].get('profile_image')

            # 기존 유저가 있는지 확인하고 없으면 생성
            try:
                social_app = SocialApp.objects.get(provider='kakao')
                user = social_app.socialaccount_set.get(uid=kakao_user_id).user
            except SocialApp.DoesNotExist:
                user = None

            if not user:
                # Create a new user if it doesn't exist
                user = CustomUser.objects.create_user(username=kakao_user_id)
                user.set_unusable_password()
                user.save()

            user.profile_image = profile_image_url
            user.nickname = nickname
            user.save()

            # 로그인 처리
            login(request, user)

            return redirect('main_page')

        except Exception as e:
            return JsonResponse({"success": False, "error": str(e)})

@login_required
def disconnect_kakao(request):
    try:
        # Get the user's SocialAccount for Kakao
        social_account = SocialAccount.objects.get(provider='kakao', user=request.user)

        # Delete the SocialAccount to disconnect Kakao
        social_account.delete()

        return redirect('kakao_profile')
    except SocialAccount.DoesNotExist:
        # If no Kakao SocialAccount exists, redirect to profile
        return redirect('kakao_profile')
