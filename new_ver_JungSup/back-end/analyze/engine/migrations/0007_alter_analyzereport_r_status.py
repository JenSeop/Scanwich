# Generated by Django 4.2.5 on 2023-10-31 11:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('engine', '0006_alter_analyzereport_f_path'),
    ]

    operations = [
        migrations.AlterField(
            model_name='analyzereport',
            name='r_status',
            field=models.CharField(default='false', max_length=10),
        ),
    ]
