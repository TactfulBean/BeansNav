export interface Weather {
	code: number
	result: Result
	msg: string
}

export interface City {
	cityId: number
	counname: string
	ianatimezone: string
	name: string
	pname: string
	secondaryname: string
	timezone: string
}

export interface Condition {
	condition: string
	conditionId: string
	humidity: string
	icon: string
	pressure: string
	realFeel: string
	sunRise: string
	sunSet: string
	temp: string
	tips: string
	updatetime: string
	uvi: string
	vis: string
	windDegrees: string
	windDir: string
	windLevel: string
	windSpeed: string
}

export interface Forecast {
	conditionDay: string
	conditionIdDay: string
	conditionIdNight: string
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

export interface Result {
	city: City
	condition: Condition
	forecast: Forecast[]
}
