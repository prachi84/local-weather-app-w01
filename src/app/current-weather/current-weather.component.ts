import { Component, OnInit } from '@angular/core';
import { Icurrentweather } from '../icurrentweather';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {
  current:Icurrentweather={
    city:" ",
    country:"",
    date:new Date(),
    image:"",
    description:"",
    temperature:0

  }

  constructor(private WeatherService:WeatherService) { }

  ngOnInit(): void{
    this.WeatherService.getCurrentWeather('Redmond','US').subscribe(data=> this.current = data)

  }

  }
  

 
  


