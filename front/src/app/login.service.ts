import { Injectable } from '@angular/core';

import { JwtHelperService } from '@auth0/angular-jwt'
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  token_name :string = "jwt_token"

  constructor(
    private http:HttpClient,
    private jwtHelper:JwtHelperService,
  ) { }

  obtain_token(credential){
    return this.http.post<string>('api-token-auth/', credential)
      .pipe(tap(res=>
        {
          this.setToken(res['token'])
        }
      ))
  }
  setToken(token){
    localStorage.setItem(this.token_name, token)
  }
  getToken():string{
    return localStorage.getItem(this.token_name)
  }
  removeToken():void{
    localStorage.removeItem(this.token_name)
  }
  logout():void{
    this.removeToken()
  }
  isAuthenicated():boolean{
    const token = this.getToken()
    return token ?! this.isTokenExpired(token):false
  }
  isTokenExpired(token:string):boolean{
    return this.jwtHelper.isTokenExpired(token)
  }
  signup(signupinfo){
    return this.http.post<string>('api/signup/', signupinfo)
  }
}
