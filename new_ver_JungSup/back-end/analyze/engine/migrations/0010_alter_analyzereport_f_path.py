# Generated by Django 4.2.5 on 2023-10-31 11:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('engine', '0009_alter_analyzereport_f_path'),
    ]

    operations = [
        migrations.AlterField(
            model_name='analyzereport',
            name='f_path',
            field=models.FileField(upload_to='../../../files/apk'),
        ),
    ]
