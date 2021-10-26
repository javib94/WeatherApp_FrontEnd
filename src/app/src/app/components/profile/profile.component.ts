import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public name:string = "User name";
  public email:string = "test@gmail.com";
  public country:string = "Guatemala";
  constructor() { }

  ngOnInit(): void {
    this.setValues();
  }

  setValues(){
    this.name = localStorage.getItem("name") || "User name";
    this.email = localStorage.getItem("username") || "test@gmail.com";
  }
}
