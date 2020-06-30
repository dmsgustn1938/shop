from django.db import models
from django.utils import timezone
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
import uuid
from rest_framework import serializers

class MyUserManager(BaseUserManager):
    def _create_user(self, email, name , password=None, **kwargs):
        if not email:
            raise ValueError('이메일은 필수입니다')
        if not name:
            raise ValueError('유저명은 필수입니다')
        user = self.model(email=self.normalize_email(email),**kwargs)
        user.set_password(password)
        user.save(using=self._db)

    def create_user(self, email, name, password, **kwargs):
        kwargs.setdefault('is_admin', False)
        return self._create_user(email, name, password, **kwargs)

    def create_superuser(self, email, name, password, **kwargs):
        kwargs.setdefault('is_admin', True)
        kwargs.setdefault('is_staff', True)
        kwargs.setdefault('is_superuser', True)

        def __str__(self):
            return self.email

class MyUser(AbstractBaseUser, PermissionsMixin):

    uuid = models.UUIDField(
        primary_key = True,
        unique = True,
        editable = False,
        default = uuid.uuid4,
        verbose_name = 'PK'
    )

    email = models.EmailField(unique = True, verbose_name = "이메일")
    name = models.CharField(max_length = 20, verbose_name = "이름")

    is_active = models.BooleanField(default = True, verbose_name = "계정 활성 여부")
    is_admin = models.BooleanField(default = False, verbose_name = "관리자 권한")
    is_staff = models.BooleanField(default = False, verbose_name = "스태프 권한")
    is_superuser = models.BooleanField(default = False, verbose_name = "super유저 권한")

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name', ]

    class Meta:

        db_table = 'db.sqlite3'
        verbose_name = '유저'
        verbose_name_plural = '유저들'

    objects = MyUserManager()

    def __str__(self):
        return self.email

class Category(models.Model):
    name = models.CharField(max_length=40, null=False)
    def __str__(self):
        return self.name

class Real_estate(models.Model):
    name = models.CharField(max_length=40, null=False)
    detail = models.TextField(max_length=300, null=False)
    image = models.ImageField(blank=True)
    price = models.IntegerField(default=0)
    upload_date = models.DateTimeField(default=timezone.now)
    category = models.ForeignKey(Category, null=False, on_delete=models.CASCADE)
    address = models.TextField(max_length=300, null=False)
    likecount = models.IntegerField(default=0)
    owner = models.ForeignKey(MyUser, null=False, on_delete=models.CASCADE)

    LikeUser = models.ManyToManyField(MyUser, blank=True, related_name="LikeUser", through="Like", through_fields=('realestate_post','user'))
    def __str__(self):
        return self.name

class Like(models.Model):
    user = models.ForeignKey(MyUser, on_delete=models.CASCADE)
    realestate_post = models.ForeignKey(Real_estate, on_delete=models.CASCADE)

class Message(models.Model):
    sender = models.ForeignKey(MyUser, on_delete=models.CASCADE, related_name="sender")
    receiver = models.ForeignKey(MyUser, on_delete=models.CASCADE, related_name="receiver")
    real_estate = models.ForeignKey(Real_estate, on_delete=models.CASCADE)
    message = models.TextField(max_length= 300, null=False)
    send_time = models.DateTimeField(default= timezone.now)
    recent_msg = models.BooleanField(default=False)
    def __str__(self):
        return ("[{0}]{1} -> {2}(@{3})").format(self.recent_msg, self.sender, self.receiver, self.real_estate)


