from rest_framework import serializers
from myshop.models import Category, Real_estate, MyUser, Message

class CateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class User_serializer(serializers.ModelSerializer):
    class Meta:
        model = MyUser
        fields = '__all__'

class RS_Serializer(serializers.ModelSerializer):
    image = serializers.ImageField(use_url= True)
    class Meta:
        model = Real_estate
        fields = '__all__'

class RS_detail_Serializer(serializers.ModelSerializer):
    image = serializers.ImageField(use_url= True)
    owner = serializers.SlugRelatedField(
        many = False,
        read_only = True,
        slug_field='email'
    )
    class Meta:
        model = Real_estate
        fields = '__all__'

class Message_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = '__all__'
