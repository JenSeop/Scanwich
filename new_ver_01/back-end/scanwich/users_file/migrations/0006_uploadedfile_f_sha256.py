# Generated by Django 4.2.5 on 2023-09-21 09:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users_file', '0005_uploadedfile_f_deleted'),
    ]

    operations = [
        migrations.AddField(
            model_name='uploadedfile',
            name='f_sha256',
            field=models.CharField(blank=True, max_length=64, null=True),
        ),
    ]
