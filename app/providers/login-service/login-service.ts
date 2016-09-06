import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the LoginService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class LoginService {

  constructor(private http: Http) {} 
   authenticateUser(){
    return this.http.get('http://restapi-skyhorse.rhcloud.com:80/api/auth');
   }
}
  
