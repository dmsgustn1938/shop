from django.contrib import admin
from django.urls import path
from django.conf.urls import url
from myshop import views
from rest_framework_jwt.views import obtain_jwt_token
from myshop.models import Real_estate

from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    url(r'^api/realestate/$', views.RS_ViewSet.as_view(), name="RealEstate"),
    url(r'^api/category/$', views.CateViewSet.as_view(), name="Category"),
    url(r'^api-token-auth/$', obtain_jwt_token),
    url(r'^api/realestate/uniform/$', views.Uniform.as_view(), name="유니폼"),
    url(r'^api/realestate/wear/$', views.Wear.as_view(), name="의류"),
    url(r'^api/realestate/accessory/$', views.Accessory.as_view(), name="악세사리"),
    url(r'^api/realestate/(?P<id>\d+)/$', views.Detail.as_view(), name="Detail"),
    url(r'^api/signup/$', views.Signup.as_view(), name="signup"),
    url(r'^api/realestate/(?P<id>\d+)/like/$', views.Recommand.as_view(), name="Like"),
    url(r'^api/message/get/$', views.Message_view.as_view(), name="Message"),
    url(r'^api/message/recent/$', views.RecentMessage.as_view(), name="RecentMessage"),
    url(r'^api/message/(?P<id>\d+)/$', views.DetailMessageView.as_view(), name="DetailMessage"),
    url(r'^api/message/(?P<id>\d+)/user/$', views.MessageReceiver.as_view(), name="MessageReceiver"),

] + static(settings.MEDIA_URL, document_root= settings.MEDIA_ROOT)



    
