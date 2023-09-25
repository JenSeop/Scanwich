# views.py (engine_analysis 앱 내부)

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from androguard.misc import AnalyzeAPK
from .models import AnalysisResult
from users_file.models import UploadedFile  # 파일 모델 임포트
from django.shortcuts import render
from django.conf import settings  # settings 모듈 임포트
import os

def call_files(request):
    # 모든 파일 목록 가져오기
    files = UploadedFile.objects.all()
    return render(request, 'call.html', {'files': files})

@csrf_exempt  # CSRF 보호 비활성화 (테스트 목적)
def analyze_apk(request):
    if request.method == 'POST':
        try:
            # 클라이언트로부터 POST 데이터를 받음
            f_path = request.POST.get('f_path', '')

            # 절대 경로 설정 및 정규화
            apk_file_path = '../../files/'+f_path

            # Androguard를 사용하여 APK 파일 분석
            a, _, _ = AnalyzeAPK(apk_file_path)

            # APK 파일의 이름 추출
            a_apk_name = a.get_app_name()

            # 분석 결과 저장 (AnalysisResult 모델에 저장하거나 다른 방법 사용)
            analysis_result = AnalysisResult(a_apk_name=a_apk_name)
            analysis_result.save()

            return JsonResponse({'apk_name': a_apk_name})
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)
    else:
        return JsonResponse({'error': 'POST 요청만 지원합니다.'}, status=405)
