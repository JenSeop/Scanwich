import os
from androguard.misc import AnalyzeAPK
from django.conf import settings

def androguard_module_proto(r_id, f_path):
    try:
        a, _, _ = AnalyzeAPK(f_path)
        
        output_path = settings.ICON_STORAGE_PATH
        output_filename = str(r_id) + '.png'
        
        if not os.path.exists(output_path):
            os.makedirs(output_path)
        
        apk_name = a.get_app_name()
        if apk_name is None:
            apk_name = ''
            
        apk_crc32 = a.get_files_crc32()
        if apk_crc32 is None:
            apk_crc32 = {}
        
        apk_file_list = a.get_files()
        if apk_file_list is None:
            apk_file_list = {}
        
        icon_path = a.get_app_icon(max_dpi=65536)
        if icon_path:
            with open(os.path.join(output_path, output_filename), 'wb') as icon_file:
                icon_data = a.get_file(icon_path)
                icon_file.write(icon_data)
        
            icon_path = os.path.join(output_path, output_filename)
        else:
            icon_path = ''
        
        data_apk = {
            'name': apk_name,
            'crc32': apk_crc32,
            'file_list': apk_file_list,
            'icon': icon_path,
        }
        
        sdk_package_name = a.get_package()
        if sdk_package_name is None:
            sdk_package_name = ''
        
        sdk_min_sdk_ver = a.get_min_sdk_version()
        if sdk_min_sdk_ver is None:
            sdk_min_sdk_ver = ''
        
        sdk_max_sdk_ver = a.get_max_sdk_version()
        if sdk_max_sdk_ver is None:
            sdk_max_sdk_ver = ''
        
        sdk_target_sdk_ver = a.get_target_sdk_version()
        if sdk_target_sdk_ver is None:
            sdk_target_sdk_ver = ''
        
        sdk_android_ver_code = a.get_androidversion_code()
        if sdk_android_ver_code is None:
            sdk_android_ver_code = ''
        
        data_sdk = {
            'package_name': sdk_package_name,
            'min_sdk_ver': sdk_min_sdk_ver,
            'max_sdk_ver': sdk_max_sdk_ver,
            'target_sdk_ver': sdk_target_sdk_ver,
            'android_ver_code': sdk_android_ver_code,
        }
        
        signed_v1 = a.is_signed_v1()
        if signed_v1 is None:
            signed_v1 = 'false'
        
        signed_v2 = a.is_signed_v2()
        if signed_v2 is None:
            signed_v2 = 'false'
        
        signed_v3 = a.is_signed_v3()
        if signed_v3 is None:
            signed_v3 = 'false'
        
        data_signed = {
            'v1': signed_v1,
            'v2': signed_v2,
            'v3': signed_v3,
        }
        
        act_main = a.get_main_activity()
        if act_main is None:
            act_main = ''
        
        act_all = a.get_activities()
        if act_all is None:
            act_all = {}
        
        data_act = {
            'main_activity': act_main,
            'all': act_all,
        }
        
        per_all = a.get_permissions()
        if per_all is None:
            per_all = {}
        
        per_de = a.get_declared_permissions()
        if per_de is None:
            per_de = {}
        
        data_permissions = {
            'all': per_all,
            'declared': per_de,
        }
        
        services = a.get_services()
        if services is None:
            services = {}
        
        receivers = a.get_receivers()
        if receivers is None:
            receivers = {}
        
        intent_filters = a.get_intent_filters('activity', act_main)
        if intent_filters is None:
            intent_filters = {}
        
        providers = a.get_providers()
        if providers is None:
            providers = {}
        
        libraries = a.get_libraries()
        if libraries is None:
            libraries = {}
        
        data = {
            'apk': data_apk,
            'sdk': data_sdk,
            'signed': data_signed,
            'activities': data_act,
            'permissions': data_permissions,
            'services': services,
            'receivers': receivers,
            'intent_filters': intent_filters,
            'providers': providers,
            'libraries': libraries,
        }
        
    except Exception:
        data = {
            'apk': {
                'name': r_id,
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
