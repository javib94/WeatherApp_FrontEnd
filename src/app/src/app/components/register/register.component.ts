import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public name:string = "";
  public email: string = "";
  public country: string = "";
  public password: string = "";
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  register(){
    console.log(this.name);
    console.log(this.email);
    console.log(this.country);
    console.log(this.password);
  }
}
