import axios from "@/utils/request"
import jsonpAdapter from "axios-jsonp"

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
export const getSearchSuggestions = async (keyWord) => {
	try {
		// @ts-ignore
		const response = await axios({
			url: `https://suggestion.baidu.com/su?wd=${keyWord}&cb=json`,
			adapter: jsonpAdapter,
			callbackParamName: "cb"
		})
		// @ts-ignore
		return response.s
	} catch (error) {
		console.error("处理搜索建议发生错误：", error)
		return null
	}
}
