import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from "../../../../../environments/environment";
import { User, UserQuerie, User_Login } from "../../models/user";
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  registerUser(user: User){
    return this.http.post(`${environment.apiUrl}register`, user);
  }

  login(user_login: User_Login){
    return this.http.post(`${environment.apiUrl}login`, user_login);
  }
  
  currentWeather(user_querie: UserQuerie){
    return this.http.post(`${environment.apiUrl}currentweather`, user_querie);
  }
}
