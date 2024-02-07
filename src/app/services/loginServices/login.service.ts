import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
//import { JwtHelperService } from '@auth0/angular-jwt';

import { Constant } from '../../services/constant-URL/constant';
import { WebService } from '../../services/WebServices/webservices.service';

@Injectable({
    providedIn: 'root'
  })
export class LoginAuthService {
  private tokenKey = 'token';
  private userKey = 'user';
  constructor(private constant: Constant, private webservice: WebService) {}

  login(formData: FormData) {
    console.log(formData)
    return this.webservice.postMethod(formData, this.constant.login).pipe(
      map((res: any) => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        const user = JSON.stringify(res.user);
        localStorage.setItem(this.userKey, user);
        localStorage.setItem(this.tokenKey, res.authorisation.token);
       // return res;
      })
    );
  }

  logOut() {
    localStorage.removeItem(this.userKey);
    localStorage.removeItem(this.tokenKey);
  }

  get isLoggedIn() {
    const token = localStorage.getItem(this.tokenKey);
    return token ? true : false;
  }

  get getUser() {
    const user = localStorage.getItem(this.userKey);
    return user ? JSON.parse(user) : null;
  }

  get getToken() {
    return localStorage.getItem(this.tokenKey);
  }
}
