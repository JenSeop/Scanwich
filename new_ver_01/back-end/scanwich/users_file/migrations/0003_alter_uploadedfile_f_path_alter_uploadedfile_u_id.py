# Generated by Django 4.2.5 on 2023-09-21 09:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users_file', '0002_uploadedfile_f_deleted'),
    ]

    operations = [
        migrations.AlterField(
            model_name='uploadedfile',
            name='f_path',
            field=models.FileField(upload_to='apk/'),
        ),
        migrations.AlterField(
            model_name='uploadedfile',
            name='u_id',
            field=models.CharField(max_length=150),
        ),
    ]
