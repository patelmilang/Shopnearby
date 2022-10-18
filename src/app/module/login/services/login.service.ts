import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry } from 'rxjs';
import { HttpService } from '../../shared/services/http.service';
import { LoginRequest, LoginResponse } from '../models/login-request';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

 // Define API
 apiURL = 'http://localhost:3000';
 constructor(private http: HttpClient, private httpm:HttpService) {}
 /*========================================
   CRUD Methods for consuming RESTful API
 =========================================*/
 // Http Options
 httpOptions = {
   headers: new HttpHeaders({
     'Content-Type': 'application/json',
   }),
 };

 // HttpClient API post() method => Create employee
 createEmployee(loginreq: LoginRequest): Observable<LoginResponse> {
  return this.http
    .post<LoginResponse>(
      this.apiURL + '/login',
      JSON.stringify(loginreq),
      this.httpOptions
    )
    .pipe(retry(1), catchError(this.httpm.handleError));
}
}
