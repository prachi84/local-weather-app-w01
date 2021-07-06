export interface Icurrentweather {
  city:string,
  country:string,
  date:Date,
  image:string,
  temperature:number,
  description:string,
}

export interface IHourlyWeather {
  city:string,
  country:string,
  hourlyTempData: number[],
  hourlyDateData: Date[],
  hourlyImageData: string[],
  date:Date,
  temperature:number,
  description:string
}
