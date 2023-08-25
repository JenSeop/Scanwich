from django.db import models

class User(models.Model):
  userID = models.AutoField(primary_key=True)
  userName = models.CharField(max_length=32, verbose_name='사용자 이름')
  userEmail = models.EmailField(max_length=128, verbose_name='사용자 이메일')
  userPW = models.CharField(max_length=300, verbose_name='사용자 비밀번호')
  isAdmin = models.BooleanField(default=False, verbose_name='관리자')
  createDT = models.DateField(auto_now_add=True, verbose_name='사용자 가입일')
  isAuthenticated = models.BooleanField(default=False, verbose_name='인증 여부')
  
  class Meta:
    db_table = 'User'