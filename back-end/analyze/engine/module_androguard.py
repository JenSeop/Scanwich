import os
from androguard.misc import AnalyzeAPK
from django.conf import settings

def androguard_module(r_id, f_path):
    try:
        a, _, _ = AnalyzeAPK(f_path)
        
        output_path = settings.ICON_STORAGE_PATH
        output_filename = str(r_id) + '.png'
        
        if not os.path.exists(output_path):
            os.makedirs(output_path)
            
        icon_path = a.get_app_icon(max_dpi=65536)
        with open(os.path.join(output_path, output_filename), 'wb') as icon_file:
            icon_data = a.get_file(icon_path)
            icon_file.write(icon_data)
        icon_path = os.path.join(output_path, output_filename)

        data = {
            'apk': {
                'name': a.get_app_name(),
                'crc32': a.get_files_crc32(),
                'file_list': a.get_files(),
                'icon': icon_path
            },
            'sdk': {
                'package_name': a.get_package(),
                'min_sdk_ver': a.get_min_sdk_version(),
                'max_sdk_ver': a.get_max_sdk_version(),
                'target_sdk_ver': a.get_target_sdk_version(),
                'android_ver_code': a.get_androidversion_code()
            },
            'signed': {
                'v1': a.is_signed_v1(),
                'v2': a.is_signed_v2(),
                'v3': a.is_signed_v3()
            },
            'activities': {
                'main_activity': a.get_main_activity(),
                'all': a.get_activities()
            },
            'permissions': {
                'all': a.get_permissions(),
                'declared': a.get_declared_permissions()
            },
            'services': a.get_services(),
            'receivers': a.get_receivers(),
            'intent_filters': a.get_intent_filters('activity', a.get_main_activity()),
            'providers': a.get_providers(),
            'libraries': a.get_libraries()
        }
    except Exception as e:
        data = {
            'apk': {
                'name': f_path,
                'crc32': 'error',
                'file_list': 'error',
                'icon': 'error',
            },
            'sdk': {
                'package_name': 'error',
                'min_sdk_ver': 'error',
                'max_sdk_ver': 'error',
                'target_sdk_ver': 'error',
                'android_ver_code': 'error',
            },
            'signed': {
                'v1': 'error',
                'v2': 'error',
                'v3': 'error',
            },
            'activities': {
                'main_activity': 'error',
                'all': 'error',
            },
            'permissions': {
                'all': 'error',
                'declared': 'error',
            },
            'services': 'error',
            'receivers': 'error',
            'intent_filters': 'error',
            'providers': 'error',
            'libraries': 'error',
        }
    
    return data
