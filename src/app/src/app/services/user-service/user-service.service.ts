import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from "../../../../../environments/environment";
import { User, UserQuerie, User_Login } from "../../models/user";
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }
  public headers = new HttpHeaders();
  
  registerUser(user: User){
    this.headers.set("Access-Control-Allow-Origin", "*");
    return this.http.post(`${environment.apiUrl}register`, user, {headers: this.headers});
  }

  login(user_login: User_Login){
    this.headers.set("Access-Control-Allow-Origin", "*");
    return this.http.post(`${environment.apiUrl}login`, user_login, {headers: this.headers});
  }
  
  currentWeather(user_querie: UserQuerie){
    this.headers.set("Access-Control-Allow-Origin", "*");
    return this.http.post(`${environment.apiUrl}currentweather`, user_querie, {headers: this.headers});
  }
}
