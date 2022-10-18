import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ToastrService } from 'ngx-toastr';
import { throwError } from 'rxjs';

@Injectable()
export class HttpService {
 
  result: any;
  constructor(private http: HttpClient, private toastr: ToastrService, ) { }

  // getWithHeader(url: string, headers: HttpHeaders): any {
  //   return this.http.get(url, { headers });
  // }

  // postWithHeader(url: string, headers: HttpHeaders, payload: Object = {}): any {
  //   return this.http.post(url, payload, { headers });
  // }

  // postWithoutPayload(url: string, key: string, value: string): any {
  //   return this.http.post(url, { headers: new HttpHeaders().set(key, value) });
  // }

  // get(url: string): any {
  //   return this.http.get(url);
  // }

  // post(url: string, payload: Object = {}): any {
  //   return this.http.post(url, payload);
  // }


  

  // Error handling
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }

}
