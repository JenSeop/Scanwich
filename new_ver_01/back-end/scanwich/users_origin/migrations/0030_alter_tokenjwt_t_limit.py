# Generated by Django 4.2.5 on 2023-10-06 06:14

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users_origin', '0029_alter_tokenjwt_t_limit'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tokenjwt',
            name='t_limit',
            field=models.DateTimeField(default=datetime.datetime(2023, 10, 6, 7, 14, 49, 480995, tzinfo=datetime.timezone.utc)),
        ),
    ]