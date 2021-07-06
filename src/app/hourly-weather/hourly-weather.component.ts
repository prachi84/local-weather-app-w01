import { Component, OnInit, Input } from '@angular/core';
import { IHourlyWeather } from '../icurrentweather';

@Component({
  selector: 'app-hourly-weather',
  templateUrl: './hourly-weather.component.html',
  styleUrls: ['./hourly-weather.component.css']
})
export class HourlyWeatherComponent implements OnInit {

  @Input() hourly: IHourlyWeather = {
    city:"DEFAULT",
    country:"",
    date:new Date(),
    description:"",
    temperature:0,
    hourlyTempData: [],
    hourlyDateData: [],
    hourlyImageData: []
  }

  constructor() { }

  ngOnInit(): void {
  }

}
