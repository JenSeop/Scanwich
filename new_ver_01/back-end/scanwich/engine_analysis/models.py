# engine_analysis/models.py

from django.db import models

class AnalysisResult(models.Model):
# Server side data
    s_apk_path = models.CharField(max_length=255, default='')
    s_apk_date = models.DateTimeField(auto_now_add=True)
    s_apk_done = models.BooleanField(default=False)
    s_apk_fid = models.IntegerField(default=0)
    s_apk_uid = models.CharField(max_length=255, default='')
# Virus Total
    #vt_result = models.JSONField(default=dict)
# Androguard
    ## APK
    a_apk_name = models.CharField(max_length=255)
    a_apk_crc32 = models.JSONField(default=dict)
    a_apk_file_list = models.JSONField(default=dict)
    ## SDK
    a_apk_package_name = models.CharField(max_length=255, default='')
    a_apk_min_sdk_ver = models.CharField(max_length=255, default='')
    a_apk_max_sdk_ver = models.CharField(max_length=255, default='', null=True)
    a_apk_target_sdk_ver = models.CharField(max_length=255, default='')
    a_apk_android_ver_code = models.CharField(max_length=255, default='')
    ## Signed
    a_apk_signed_v1 = models.BooleanField(default=False)
    a_apk_signed_v2 = models.BooleanField(default=False)
    a_apk_signed_v3 = models.BooleanField(default=False)
    ## Activities
    a_apk_main_activity = models.CharField(max_length=255, default='')
    a_apk_activities = models.JSONField(default=dict)
    ## Permissions
    a_apk_get_permissions = models.JSONField(default=dict)
    a_apk_get_declared_permissions = models.JSONField(default=dict)
    ## Services
    a_apk_services = models.JSONField(default=dict)
    ## Receivers
    a_apk_receivers = models.JSONField(default=dict)
    ## Intent Filters
    a_apk_intent_filters = models.JSONField(default=dict)
    ## Providers
    a_apk_providers = models.JSONField(default=dict)
    ## Libraries
    a_apk_libraries = models.JSONField(default=dict)
    ## APK Icon
    a_apk_icon_path = models.CharField(max_length=255, default='', null=True, blank=True)