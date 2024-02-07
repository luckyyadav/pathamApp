import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, throwError } from 'rxjs';
import { Constant } from '../constant-URL/constant';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class WebService {
  private loaderSubject = new BehaviorSubject<boolean>(false);
  loaderState = this.loaderSubject.asObservable();

  isSubscribedUser = new Subject<any>();
  isSubscribedUser$ = this.isSubscribedUser.asObservable();

  baseUrl: string;
  constructor(
    public httpClient: HttpClient,
    public constant: Constant,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.baseUrl = constant.baseURL;
  }

  /*  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    })
  } */

  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
    } else if (error.status == 404) {
      return throwError(error.error.msg);
      //return throwError(error.message);
    } else if (error.status === 400) {
      return throwError(error.error.msg);
    } else if (error.status === 500) {
      return throwError(error.error.msg);
    } else if (error.status === 401) {
      sessionStorage.clear();
      localStorage.clear();
      //this.router.navigate(['/']);
      return throwError(error.message);
    }

    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }

  // Handle API errors
  getMethod(endUrl: any): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      }),
    };
    return this.httpClient
      .get<any>(this.baseUrl + endUrl, httpOptions)
      .pipe(catchError(this.handleError));
  }

  postMethod(object: any, endUrl: any, action?: any): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      }),
    };
    return this.httpClient
      .post<any>(this.baseUrl + endUrl, object, httpOptions)
      .pipe(catchError(this.handleError));
  }

  // putMethod(object: any, endUrl: any): Observable<any> {
  //   let httpOptions = {
  //     headers: new HttpHeaders({
  //       'Authorization': 'Bearer ' + localStorage.getItem('token')
  //     })
  //   }
  //   return this.httpClient
  //     .put<any>(this.baseUrl + endUrl, object, httpOptions)
  //     .pipe(
  //       catchError(this.handleError)
  //     )
  // }

  // deleteMethod(object: any, endUrl: any): Observable<any> {
  //   let httpOptions = {
  //     headers: new HttpHeaders({
  //       'Authorization': 'Bearer ' + localStorage.getItem('token')
  //     })
  //   }
  //   return this.httpClient
  //     .delete<any>(this.baseUrl + endUrl, httpOptions)
  //     .pipe(
  //       catchError(this.handleError)
  //     )
  // }
  // isStartupLoggedIn() {
  //   return localStorage.getItem('startupUser') != null;
  // }
  // isExpertLoggedIn() {
  //   return localStorage.getItem('expertUser') != null;
  // }

  showLoader() {
    this.loaderSubject.next(true);
  }

  hideLoader() {
    this.loaderSubject.next(false);
  }

  showToasterSuccess(data: any) {
    console.log(data);
    this.toastr.success(data.status + ' : ' + data.message);
  }

  showToasterFail(data: any) {
    console.log(data);
    this.toastr.error('Error occurred while making the POST request', 'Error');
  }
}
