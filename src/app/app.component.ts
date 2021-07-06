import { Component } from '@angular/core';
import { WeatherService } from './weather.service';
import { Icurrentweather, IHourlyWeather } from './icurrentweather';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'local-weather-app';

  currentWeather:Icurrentweather = {
    city: "",
    country: "",
    date: new Date(),
    image: "",
    description: "",
    temperature: 0
  }

  hourlyWeather:IHourlyWeather = {
    city: "",
    country: "",
    date:new Date(),
    description:"",
    temperature:0,
    hourlyTempData: [],
    hourlyDateData: [],
    hourlyImageData: []
  }


constructor(private Weatherservice: WeatherService){}

ngOnInit(): void{
  this.Weatherservice.getCurrentWeather('Redmond','US').
  subscribe (data => this.currentWeather = data)

  this.Weatherservice.getHourlyWeather('Redmond','US').
  subscribe(data => this.hourlyWeather = data)
}

doSearch(searchValue:string){
  const userInput =searchValue.split(',').map(s => s.trim());
  this.Weatherservice.getHourlyWeather(
    userInput[0],
    userInput.length > 1 ? userInput[1] :undefined
    ).subscribe(data => this.hourlyWeather = data)

  this.Weatherservice.getCurrentWeather(
    userInput[0],
    userInput.length > 1 ? userInput[1] :undefined
    ).subscribe(data => this.currentWeather =data)
}

// doSearch(searchValue:string){
//   const userInput =searchValue.split(',').map(s => s.trim());
//   this.Weatherservice.getCurrentWeather(
//     userInput[0],
//     userInput.length > 1 ? userInput[1] :undefined
//     ).subscribe(data => this.currentWeather =data)
// }


}
