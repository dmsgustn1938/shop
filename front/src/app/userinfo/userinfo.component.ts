import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {

  token: string;
  userinfo: string[];

  constructor(
    private login:LoginService,
    private jwthelper:JwtHelperService,
    private location:Location,
    private router:Router,
  ) { }

  ngOnInit() {
    this.token = this.login.getToken()
    this.userinfo = this.jwthelper.decodeToken(this.token);
    console.log(this.userinfo)
  }

  autologin(){
    const credential = {email:"utopia1002@hotmail.com", password: "song"}
    this.login.obtain_token(credential)
      .subscribe(
        response=> {
          this.location.back()
        },
        response=> alert("다시 시도해주세요")
      )
  }

  logout(){
    this.login.logout()
    alert("로그아웃 되었습니다")
    this.router.navigate(['../../'])
  }

}
