import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IcurrentweatherData } from './icurrentweather-data';
import { environment } from 'src/environments/environment';
import { Icurrentweather } from './icurrentweather';
import {map}from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService{
  constructor(private httpClient:HttpClient) { }

  getCurrentWeather( search:string | number, country?:string)
  {
    let uriParam ='';
    if(typeof search === 'string'){
      uriParam= `q=${search}`
    }
    else {
        uriParam= `zip=${search}`
    }

    if (country){
        uriParam=`${uriParam},${country}`
    }
  
    return this.httpClient.get<IcurrentweatherData>(
      `http://api.openweathermap.org/data/2.5/weather?${uriParam}&appid=${environment.appId}`
    ).pipe(
      map(data => this.transformtoIcurrentweather(data))

    )
  }

  private transformtoIcurrentweather(data:IcurrentweatherData):
  Icurrentweather{
    return{
      city:data.name,
      country:data.sys.country,
      date:new Date(data.dt * 1000),
      temperature:data.main.temp * 9/5 - 459.67,
      description:data.weather[0].description,
      image:`http://openweathermap.org/img/w/${data.weather[0].icon}.png`

    }
  }
}
