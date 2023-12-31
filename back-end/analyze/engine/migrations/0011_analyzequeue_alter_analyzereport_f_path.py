# Generated by Django 4.2.5 on 2023-11-01 07:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('engine', '0010_alter_analyzereport_f_path'),
    ]

    operations = [
        migrations.CreateModel(
            name='AnalyzeQueue',
            fields=[
                ('q_id', models.AutoField(primary_key=True, serialize=False)),
                ('u_id', models.CharField(default='', max_length=255)),
                ('r_id', models.CharField(default='', max_length=10)),
            ],
        ),
        migrations.AlterField(
            model_name='analyzereport',
            name='f_path',
            field=models.FileField(upload_to='apk/'),
        ),
    ]
