# Generated by Django 4.2.5 on 2023-10-28 14:29

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='UploadedFile',
            fields=[
                ('f_id', models.AutoField(primary_key=True, serialize=False)),
                ('f_path', models.FileField(upload_to='apk/')),
                ('f_date', models.DateTimeField(auto_now_add=True)),
                ('u_id', models.CharField(max_length=255)),
                ('f_name', models.CharField(max_length=255)),
                ('f_type', models.CharField(max_length=10)),
                ('f_size', models.PositiveBigIntegerField(blank=True, default=None, null=True)),
                ('f_sha256', models.CharField(blank=True, max_length=64, null=True)),
                ('f_md5', models.CharField(blank=True, max_length=32, null=True)),
                ('f_deleted', models.CharField(blank=True, max_length=255, null=True)),
                ('s_id', models.IntegerField(default=0)),
                ('s_done', models.BooleanField(default=False)),
            ],
        ),
    ]
