export type Weather = {
	code: number
	result: Result
	msg: string
}

type City = {
	country: string
	economize: string
	city_name: string
}

type Condition = {
	condition: string
	humidity: string
	pressure: string
	sunRise: string
	sunSet: string
	realFeel: string
	temp: string
	tips: string
	updateTime: string
	windLevel: string
	windSpeed: string
	windDir: string
	windDegrees: string
	uvi: string
	vis: string
}

type Forecast = {
	conditionDay: string
	conditionNight: string
	humidity: string
	moonphase: string
	moonrise: string
	moonset: string
	pop: string
	predictDate: string
	qpf: string
	sunrise: string
	sunset: string
	tempDay: string
	tempNight: string
	updatetime: string
	uvi: string
	windDegreesDay: string
	windDegreesNight: string
	windDirDay: string
	windDirNight: string
	windLevelDay: string
	windLevelNight: string
	windSpeedDay: string
	windSpeedNight: string
}

type Result = {
	city: City
	condition: Condition
	forecast: Forecast[]
}
