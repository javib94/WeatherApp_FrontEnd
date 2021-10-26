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
  }

  setValues(){
    
  }
}