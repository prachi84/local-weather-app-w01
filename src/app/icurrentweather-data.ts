export interface IcurrentweatherData {
  weather: [{
    description: string,
    icon: string
  }],
  main: {
    temp: number
  },
  dt: number,
  sys: {
    country: string
  },
  name: string
}

export interface IHourlyWeatherData {
  city: {
    name: string,
    country: string
  }
  list: [{
    dt: number,
    weather: [{
      description: string,
      icon: string
    }],
    main: {
      temp: number
    },
  },{
    dt: number,
    weather: [{
      description: string,
      icon: string
    }],
    main: {
      temp: number
    },
  },{
    dt: number,
    weather: [{
      description: string,
      icon: string
    }],
    main: {
      temp: number
    },
  },{
    dt: number,
    weather: [{
      description: string,
      icon: string
    }],
    main: {
      temp: number
    },
  },{
    dt: number,
    weather: [{
      description: string,
      icon: string
    }],
    main: {
      temp: number
    },
  },{
    dt: number,
    weather: [{
      description: string,
      icon: string
    }],
    main: {
      temp: number
    },
  }
]
}
