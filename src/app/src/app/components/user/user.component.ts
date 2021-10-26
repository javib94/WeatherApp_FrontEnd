import { Component, OnInit } from '@angular/core';
import { UserQuerie } from "../../models/user";
import { UserServiceService } from "../../services/user-service/user-service.service";
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public name_preference:string = "";
  public weather_type:string = "";
  public temp_max:string = "";
  public temp_min:string = "";
  public humidity:string = "";
  public wind_speed:string = "";
  public user_querie: UserQuerie = {
    username: "",
    latitud: "",
    longitud: ""
  }
  constructor(private user_service: UserServiceService) { }

  ngOnInit(): void {
    this.getWeatherData();
  }
  getWeatherData(){
    let data: any;

    this.user_querie.username = localStorage.getItem("username") || "";
    this.user_querie.latitud = localStorage.getItem("latitud") || "";
    this.user_querie.longitud = localStorage.getItem("longitud") || "";
    this.user_service.currentWeather(this.user_querie)
    .subscribe(
      res => {
        data = res;
        this.name_preference = data.name;
        this.weather_type = data.weather[0].description;
        this.temp_max = data.main.temp_max;
        this.temp_min = data.main.temp_min;
        this.wind_speed = data.wind.speed;
        this.humidity = data.main.humidity;
      },
      error => {
        console.log(error);
      }
    );
  }
}
