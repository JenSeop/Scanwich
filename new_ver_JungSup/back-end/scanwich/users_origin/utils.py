#users_origin/utils.py

from django.core.mail import send_mail
from django.conf import settings
from django.template.loader import render_to_string

def send_verification_email(user, token):
    # 이메일 제목
    subject = '[Scanwich] Email Verification'
    
    # HTML 템플릿 렌더링
    context = {'token': token}
    html_message = render_to_string('email_verification.html', context)
    
    from_email = settings.EMAIL_HOST_USER   # 발신자 이메일
    recipient_list = [user.u_email]         # 수신자 리스트
    
    # 텍스트 형식의 메시지 (일부 HTML을 지원하지 않는 클라이언트를 위함)
    message = f'이메일 인증을 위해 우측의 링크를 클릭해주세요.: http://localhost.com/verify-email/{token}/'
    
    # 이메일 전송
    send_mail(subject, message, from_email, recipient_list, html_message=html_message)

def send_find_id_email(user, message):
    # 이메일 제목
    subject = '[Scanwich] Find ID'
    
    # HTML 템플릿 렌더링
    context = {'message': message}
    html_message = render_to_string('find_id_result.html', context)
    
    from_email = settings.EMAIL_HOST_USER   # 발신자 이메일
    recipient_list = [user.u_email]         # 수신자 리스트
    
    # 텍스트 형식의 메시지 (일부 HTML을 지원하지 않는 클라이언트를 위함)
    message = f'귀하의 아이디는 다음과 같습니다: {user.u_id}.'
    
    # 이메일 전송
    send_mail(subject, message, from_email, recipient_list, html_message=html_message)