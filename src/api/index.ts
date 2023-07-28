import axios from "@/utils/request"

const WEATHER_URL = import.meta.env.VITE_WEATHER
const LINKBOX_URL = import.meta.env.VITE_LINKBOX
const UPDATELOG_URL = import.meta.env.VITE_UPDATELOG
export const getWeather = () => {
	return axios({
		method: "GET",
		url: WEATHER_URL
	})
}
export const getLinkBox = () => {
	return axios({
		method: "GET",
		url: LINKBOX_URL
	})
}
export const getUpdateLog = () => {
	return axios({
		method: "GET",
		url: UPDATELOG_URL
	})
}
