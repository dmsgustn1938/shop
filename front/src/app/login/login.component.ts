import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private Login:LoginService
  ) { }

  ngOnInit() {
  }

  login(username,password){
    const credential = {email:username.value, password: password.value}
    this.Login.obtain_token(credential)
      .subscribe(
        response=> alert("로그인완료"),
        response=> alert("다시 시도해주세요")
      )
  }
}
