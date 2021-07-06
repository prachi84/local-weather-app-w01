import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IcurrentweatherData, IHourlyWeatherData } from './icurrentweather-data';
import { environment } from 'src/environments/environment';
import { Icurrentweather, IHourlyWeather } from './icurrentweather';
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

  getHourlyWeather( search:string | number, country?:string)
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
  
    return this.httpClient.get<IHourlyWeatherData>(
      `http://api.openweathermap.org/data/2.5/forecast?${uriParam}&appid=${environment.appId}`
    ).pipe(
      map(data => this.transformtoIHourlyweather(data))
    )
  }

  private transformtoIHourlyweather(data:IHourlyWeatherData):
  IHourlyWeather{
    console.log("Data ",data);
    return{
      city:data.city.name,
      country:data.city.country,
      date:new Date(data.list[0].dt * 1000),
      temperature:data.list[0].main.temp * 9/5 - 459.67,
      description:data.list[0].weather[0].description,
      hourlyTempData:[(data.list[0].main.temp * 9/5 - 459.67),
                      (data.list[1].main.temp * 9/5 - 459.67),
                      (data.list[2].main.temp * 9/5 - 459.67),
                      (data.list[3].main.temp * 9/5 - 459.67),
                      (data.list[4].main.temp * 9/5 - 459.67),
                      (data.list[5].main.temp * 9/5 - 459.67)],
      hourlyDateData:[(new Date(data.list[0].dt*1000)),
                      (new Date(data.list[1].dt*1000)),
                      (new Date(data.list[2].dt*1000)),
                      (new Date(data.list[3].dt*1000)),
                      (new Date(data.list[4].dt*1000)),
                      (new Date(data.list[5].dt*1000))],
      hourlyImageData:[(`http://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`),
                       (`http://openweathermap.org/img/w/${data.list[1].weather[0].icon}.png`),
                       (`http://openweathermap.org/img/w/${data.list[2].weather[0].icon}.png`),
                       (`http://openweathermap.org/img/w/${data.list[3].weather[0].icon}.png`),
                       (`http://openweathermap.org/img/w/${data.list[4].weather[0].icon}.png`),
                       (`http://openweathermap.org/img/w/${data.list[5].weather[0].icon}.png`)]
    }
  }
  }

