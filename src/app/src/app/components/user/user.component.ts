import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as mapboxgl from 'mapbox-gl';

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
  public map_gl:any;
  public user_querie: UserQuerie = {
    username: "",
    latitud: "",
    longitud: ""
  }

  constructor(private user_service: UserServiceService) { }

  ngOnInit(): void {
    this.getWeatherData();
    this.insertMap();
  }

  insertMap(){
    
    this.map_gl = new mapboxgl.Map({
      accessToken: environment.mapboxKey,
      container: 'map-box', // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: [-90.510226, 14.635436], // starting position
      zoom: 12.5 // starting zoom
    });
    this.createMarket();
    // Add zoom and rotation controls to the map.
    this.map_gl.addControl(new mapboxgl.NavigationControl());
    
  }

  createMarket(){
    let data: any;
    
    this.map_gl.on('click', (e:any) => {
      this.user_querie.username = localStorage.getItem("username") || "";
      this.user_querie.latitud = e.lngLat.lat.toString();
      this.user_querie.longitud = e.lngLat.lng.toString();
      console.log(this.user_querie);
      this.user_service.currentWeather(this.user_querie)
    .subscribe(
      res => {
        data = res;
        console.log(data);
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
      // {
      //     lngLat: {
      //         lng: 40.203,
      //         lat: -74.451
      //     },
      //     originalEvent: {...},
      //     point: {
      //         x: 266,
      //         y: 464
      //     },
      //      target: {...},
      //      type: "click"
      // }
      });
  }

  getWeatherData(){
    let data: any;

    this.user_querie.username = localStorage.getItem("username") || "";
    this.user_querie.latitud = localStorage.getItem("latitud") || "";
    this.user_querie.longitud = localStorage.getItem("longitud") || "";
    console.log(this.user_querie);
    this.user_service.currentWeather(this.user_querie)
    .subscribe(
      res => {
        data = res;
        console.log(data);
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
