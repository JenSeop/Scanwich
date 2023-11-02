# Generated by Django 4.2.5 on 2023-10-31 10:39

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('engine', '0002_delete_uploadedfile'),
    ]

    operations = [
        migrations.CreateModel(
            name='AnalyzeReport',
            fields=[
                ('r_id', models.AutoField(primary_key=True, serialize=False)),
                ('r_date', models.DateTimeField(auto_now_add=True)),
                ('r_data', models.JSONField(default=dict)),
                ('r_status', models.CharField(max_length=10)),
                ('u_id', models.CharField(max_length=255)),
                ('u_name', models.CharField(max_length=255)),
            ],
        ),
    ]
