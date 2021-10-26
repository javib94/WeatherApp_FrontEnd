import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User, UserQuerie, User_Login } from "../../models/user";
import { UserServiceService } from "../../services/user-service/user-service.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public email: string = "";
  public password: string = "";

  public data_user: User_Login = {
    username: "",
    password: ""
  }

  constructor(private router: Router, private user_service: UserServiceService) { }

  ngOnInit(): void {
  }

  login(){
    /*
    console.log(this.email);
    console.log(this.password);
    */
   //Set values of user's information
    this.data_user.username = this.email;
    this.data_user.password = this.password

    //Call the function to Login
    this.user_service.login(this.data_user)
    .subscribe(
      res => {
        console.log(res);
      },
      error => {
        console.log(error);
      }
    );
    //this.router.navigate(['/profile'])
  }
}
