import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User, UserQuerie } from "../../models/user";
import { UserServiceService } from "../../services/user-service/user-service.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public name:string = "";
  public email: string = "";
  public latitud: string = "";
  public longitud: string = "";
  public password: string = "";

  public new_user: User = {
    name: "",
    username: "",
    password: "",
    longitud: "",
    latitud: ""
  }
  
  constructor(private router: Router, private user_service: UserServiceService) { }

  ngOnInit(): void {
  }

  register(){
    //Get location of user
    this.getLocation();
    
    /*console.log(this.name);
    console.log(this.email);
    console.log(this.latitud);
    console.log(this.longitud);
    console.log(this.password);*/
    //Set values of user's information
    this.new_user.username = this.email;
    this.new_user.password = this.password;
    this.new_user.name = this.name;
    this.new_user.latitud = this.latitud;
    this.new_user.longitud = this.longitud;
    
    //Call the function for insert new user
    this.user_service.registerUser(this.new_user)
    .subscribe(
      res => {
        console.log(res);
      },
      error => {
        console.log(error);
      }
    );
  }

  
getPosition(): Promise<any> {
  return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resp => {
              resolve({lng: resp.coords.longitude, lat: resp.coords.latitude});
          },
          err => {
              reject(err);
        });
  });
}


getLocation() {
  this.getPosition().then(pos => {
      this.latitud = pos.lat;
      this.longitud = pos.lng;
  });
}


}
