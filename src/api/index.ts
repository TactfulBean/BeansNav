import Request from "@/utils/request.ts"
import jsonpAdapter from "axios-jsonp"

const WEATHER_URL = import.meta.env.VITE_WEATHER
const LINKBOX_URL = import.meta.env.VITE_LINKBOX
const UPDATELOG_URL = import.meta.env.VITE_UPDATELOG
const WALLPAPER = import.meta.env.VITE_WALLPAPER
export const getWeather = () => {
	return Request.get(WEATHER_URL)
}
interface WallPaper {
	code: number
	result: {
		copyright: string
		copyrightlink: string
		date: string
		title: string
		url: string
	}[]
	msg: string
}
export const getWallPaper = () => {
	return Request.get<WallPaper>(WALLPAPER)
}
interface LinkBox {
	name: string
	child: {
		name: string
		link: string
		avatar: string
	}[]
}
export const getLinkBox = () => {
	return Request.get<LinkBox[]>(LINKBOX_URL)
}
interface UpdateLog {
	header: string
	color: string
	info: string
	tags: {
		color: string
		info: string
		text: string
	}[]
}
export const getUpdateLog = () => {
	return Request.get<UpdateLog[]>(UPDATELOG_URL)
}
export const getSearchSuggestions = async (keyWord: string) => {
	// @ts-ignore
	return Request.get(`https://suggestion.baidu.com/su?wd=${keyWord}&cb=json`, { adapter: jsonpAdapter, callbackParamName: "cb" })
}
