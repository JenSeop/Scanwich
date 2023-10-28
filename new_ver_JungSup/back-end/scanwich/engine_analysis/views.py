# views.py (engine_analysis 앱 내부)

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from androguard.misc import AnalyzeAPK
from androguard.core.bytecodes import apk
from .models import AnalysisResult
from django.conf import settings
from users_file.models import UploadedFile  # 파일 모델 임포트
from django.shortcuts import render
from .virustotal import test
from django.conf import settings
import os

def call_files(request):
    # 모든 파일 목록 가져오기
    files = UploadedFile.objects.all()
    return render(request, 'call.html', {'files': files})

def save_apk_icon(icon_data, icon_filename):
    try:
        # 파일 저장 디렉토리 경로
        output_dir = os.path.join(settings.MEDIA_ROOT, 'apk_icon')

        # 디렉토리가 존재하지 않으면 생성
        os.makedirs(output_dir, exist_ok=True)

        # 파일 경로 설정
        icon_filepath = os.path.join(output_dir, icon_filename)

        # 이미지 데이터를 파일로 저장 (바이너리 형태로 저장)
        with open(icon_filepath, 'wb') as icon_file:
            icon_file.write(icon_data)

        # 저장된 파일 경로 반환
        return icon_filepath
    except Exception as e:
        return str(e)
    
@csrf_exempt  # CSRF 보호 비활성화 (테스트 목적)
def analyze_apk(request):
    if request.method == 'POST':
        try:
            # POST 수신
            f_path = request.POST.get('f_path', '')
            f_id = request.POST.get('f_id', '')
            u_id = request.POST.get('f_id', '')

            # 절대 경로 설정
            apk_file_path = '../../files/'+f_path

            # APK 파일 분석
            a, _, _ = AnalyzeAPK(apk_file_path)
            
            # VT 파일 분석
            res_vt = test(settings.VIRUSTOTAL_API_KEY,apk_file_path)

            # Androguard 엔진 호출
            ## APK
            a_apk_name = a.get_app_name()
            a_apk_crc32 = a.get_files_crc32()
            a_apk_file_list = a.get_files()
            ## SDK
            a_apk_package_name = a.get_package()
            a_apk_min_sdk_ver = a.get_min_sdk_version()
            a_apk_max_sdk_ver = a.get_max_sdk_version()
            a_apk_target_sdk_ver = a.get_target_sdk_version()
            a_apk_android_ver_code = a.get_androidversion_code()
            ## Signed
            a_apk_signed_v1 = a.is_signed_v1()
            a_apk_signed_v2 = a.is_signed_v2()
            a_apk_signed_v3 = a.is_signed_v3()
            ## Activities
            a_apk_main_activity = a.get_main_activity()
            a_apk_activities = a.get_activities()
            ## Permissions
            a_apk_get_permissions = a.get_permissions()
            a_apk_get_declared_permissions = a.get_declared_permissions()
            ## Services
            a_apk_services = a.get_services()
            ## Receivers
            a_apk_receivers = a.get_receivers()
            ## Intent Filters
            a_apk_intent_filters = a.get_intent_filters('activity',a_apk_main_activity)
            ## Providers
            a_apk_providers = a.get_providers()
            ## Libraries
            a_apk_libraries = a.get_libraries()
            ## APK Icon
            ### 아이콘 추출 코드
            ### Androguard에서 얻은 이미지 파일 경로
            a_apk_icon_path = a.get_app_icon(max_dpi=65536)
            # 저장할 경로와 파일 이름을 지정합니다.
            output_path = os.path.join(settings.MEDIA_ROOT, 'apk_icon')
            output_filename = a_apk_name+'.png'
            # 이미지 파일을 저장합니다.
            with open(os.path.join(output_path, output_filename), 'wb') as icon_file:
                icon_data = a.get_file(a_apk_icon_path)
                icon_file.write(icon_data)
            a_apk_icon_path = os.path.join(output_path, output_filename)
                
            # 분석 결과 저장
            analysis_result = AnalysisResult(
                s_apk_fid = f_id,
                s_apk_uid = u_id,
                s_apk_path = f_path,
                ## APK
                a_apk_name=a_apk_name,
                a_apk_crc32=a_apk_crc32,
                a_apk_file_list=a_apk_file_list,
                ## SDK
                a_apk_package_name = a_apk_package_name,
                a_apk_min_sdk_ver = a_apk_min_sdk_ver,
                a_apk_max_sdk_ver = a_apk_max_sdk_ver,
                a_apk_target_sdk_ver = a_apk_target_sdk_ver,
                a_apk_android_ver_code = a_apk_android_ver_code,
                ## Signed
                a_apk_signed_v1 = a_apk_signed_v1,
                a_apk_signed_v2 = a_apk_signed_v2,
                a_apk_signed_v3 = a_apk_signed_v3,
                ## Activities
                a_apk_main_activity = a_apk_main_activity,
                a_apk_activities = a_apk_activities,
                ## Permissions
                a_apk_get_permissions = a_apk_get_permissions,
                a_apk_get_declared_permissions = a_apk_get_declared_permissions,
                ## Services
                a_apk_services = a_apk_services,
                ## Receivers
                a_apk_receivers = a_apk_receivers,
                ## Intent Filters
                a_apk_intent_filters = a_apk_intent_filters,
                ## Providers
                a_apk_providers = a_apk_providers,
                ## Libraries
                a_apk_libraries = a_apk_libraries,
                ## APK Icon
                a_apk_icon_path = a_apk_icon_path,
                )
            analysis_result.save()

            return JsonResponse({
                # Androguard
                'VirusTotal': res_vt,
                'Androguard':{
                    'APK':{
                        'name': a_apk_name,
                        'crc32': a_apk_crc32,
                        'file_list': a_apk_file_list,
                        'package_name': a_apk_package_name,
                    },
                    'SDK':{
                        'min_sdk_ver': a_apk_min_sdk_ver,
                        'max_sdk_ver': a_apk_max_sdk_ver,
                        'target_sdk_ver': a_apk_target_sdk_ver,
                        'android_ver_code': a_apk_android_ver_code,
                    },
                    'Singed':{
                        'signed_v1': a_apk_signed_v1,
                        'signed_v2': a_apk_signed_v2,
                        'signed_v3': a_apk_signed_v3,
                    },
                    'Activities':{
                        'activity_main': a_apk_main_activity,
                        'activities_all': a_apk_activities,
                    },
                    'Permissions':{
                        'get_permissions': a_apk_get_permissions,
                        'get_declared_permissions': a_apk_get_declared_permissions,
                    },
                    'Services':{
                        'services': a_apk_services,
                    },
                    'Receivers':{
                        'receivers': a_apk_receivers,
                    },
                    'Intent Filters':{
                        'intent_filters': a_apk_intent_filters,
                    },
                    'Providers':{
                        'providers': a_apk_providers,
                    },
                    'Libraries':{
                        'libraries': a_apk_libraries,
                    },
                    'APK Icon':{
                        'path': a_apk_icon_path,
                    }
                }
                })
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)
    else:
        return JsonResponse({'error': 'POST 요청만 지원합니다.'}, status=405)

def result(request):
    try:
        analysis_result = AnalysisResult.objects.order_by('-id').first()

        # 분석 결과 context 전달 템플릿 렌더링
        context = {
            'a_apk_name': analysis_result.a_apk_name,
            'a_apk_crc32': analysis_result.a_apk_crc32,
            'a_apk_file_list': analysis_result.a_apk_file_list,
            'a_apk_package_name': analysis_result.a_apk_package_name,
            'a_apk_min_sdk_ver': analysis_result.a_apk_min_sdk_ver,
            'a_apk_max_sdk_ver': analysis_result.a_apk_max_sdk_ver,
            'a_apk_target_sdk_ver': analysis_result.a_apk_target_sdk_ver,
            'a_apk_android_ver_code': analysis_result.a_apk_android_ver_code,
            'a_apk_signed_v1': analysis_result.a_apk_signed_v1,
            'a_apk_signed_v2': analysis_result.a_apk_signed_v2,
            'a_apk_signed_v3': analysis_result.a_apk_signed_v3,
            'a_apk_main_activity': analysis_result.a_apk_main_activity,
            'a_apk_activities': analysis_result.a_apk_activities,
            'a_apk_get_permissions': analysis_result.a_apk_get_permissions,
            'a_apk_get_declared_permissions': analysis_result.a_apk_get_declared_permissions,
            'a_apk_services': analysis_result.a_apk_services,
            'a_apk_receivers': analysis_result.a_apk_receivers,
            'a_apk_intent_filters': analysis_result.a_apk_intent_filters,
            'a_apk_providers': analysis_result.a_apk_providers,
            'a_apk_libraries': analysis_result.a_apk_libraries,
            'a_apk_icon_path': analysis_result.a_apk_icon_path,
        }

        return render(request, 'result.html', context)
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=400)