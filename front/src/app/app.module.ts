import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRouterModule } from './app.router.module'; //for Router

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { CategoryComponent } from './category/category.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

import { HttpClientModule } from '@angular/common/http'; //for http
import { JwtModule } from '@auth0/angular-jwt'; //for JWT
import { AuthGuard } from './auth.guard';

export function tokenGetter(){
  return localStorage.getItem('access_token')
}

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CategoryComponent,
    ListComponent,
    DetailComponent,
    LoginComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    HttpClientModule,  //for http
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['api-token-auth'],
      }
    })
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
