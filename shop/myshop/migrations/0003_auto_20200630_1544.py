# Generated by Django 3.0.7 on 2020-06-30 06:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myshop', '0002_category_real_estate'),
    ]

    operations = [
        migrations.AddField(
            model_name='real_estate',
            name='address',
            field=models.TextField(default='Seoul, Republic of Korea', max_length=300),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='real_estate',
            name='like',
            field=models.IntegerField(default=0),
        ),
    ]
