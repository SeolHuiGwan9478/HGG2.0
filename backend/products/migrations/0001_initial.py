# Generated by Django 4.0.4 on 2022-07-13 09:49

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('p_id', models.AutoField(primary_key=True, serialize=False)),
                ('p_title', models.CharField(max_length=10, verbose_name='상품제목')),
                ('p_content', models.TextField(verbose_name='상품설명')),
                ('p_file_1', models.ImageField(upload_to='product_pics', verbose_name='이미지1')),
                ('p_file_2', models.ImageField(blank=True, upload_to='product_pics', verbose_name='이미지2')),
                ('p_file_3', models.ImageField(blank=True, upload_to='product_pics', verbose_name='이미지3')),
                ('p_created', models.DateTimeField(auto_now_add=True, verbose_name='상품작성일')),
                ('p_updated', models.DateTimeField(auto_now=True, verbose_name='상품수정일')),
                ('p_cnt', models.IntegerField(verbose_name='조회수')),
                ('p_status', models.BooleanField(default=False, verbose_name='상품상태')),
                ('p_price', models.IntegerField(verbose_name='상품가격')),
                ('p_quantity', models.IntegerField(verbose_name='상품수량')),
                ('p_ddate', models.DateTimeField(verbose_name='마감일')),
                ('member', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='products', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
