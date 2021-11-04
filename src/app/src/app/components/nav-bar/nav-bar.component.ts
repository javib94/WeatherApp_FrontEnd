import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  public isLogged: boolean = false;
  constructor(private router:Router) { }

  ngOnInit(): void {
    setInterval(() => {
      this.verification()
     }, 300);
  }
  verification() {
    if(localStorage.getItem("username") == undefined){
      this.isLogged = false;
    }
    else {
      this.isLogged = true;
    }
  }
  logout(){
    localStorage.removeItem("username");
    this.router.navigate(['/']);
  }
}
