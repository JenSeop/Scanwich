# Generated by Django 4.2.5 on 2023-10-11 04:17

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('engine_analysis', '0002_analysisresult_s_apk_done_analysisresult_s_apk_fid'),
    ]

    operations = [
        migrations.RenameField(
            model_name='analysisresult',
            old_name='s_apk_user',
            new_name='s_apk_uid',
        ),
    ]
