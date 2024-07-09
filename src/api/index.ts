import { LinkBox } from "@/type/LinkBox"
import { Changelog } from "@/type/Changelog"
import { Wallpaper } from "@/type/Wallpaper"
import { Weather } from "@/type/Weather"
import Request from "@/utils/request.ts"
import jsonpAdapter from "axios-jsonp"

const WEATHER_URL = import.meta.env.VITE_WEATHER
const LINKBOX_URL = import.meta.env.VITE_LINKBOX
const UPDATELOG_URL = import.meta.env.VITE_UPDATELOG
const WALLPAPER = import.meta.env.VITE_WALLPAPER
export const getWeather = () => {
  return Request.get<Weather>(WEATHER_URL)
}
export const getWallPaper = () => {
  return Request.get<Wallpaper>(WALLPAPER)
}
export const getLinkBox = () => {
  return Request.get<LinkBox>(LINKBOX_URL)
}
export const getChangelog = () => {
  return Request.get<Changelog>(UPDATELOG_URL)
}
export const getSearchSuggestions = async (keyWord: string) => {
  // @ts-ignore
  return Request.get(`https://suggestion.baidu.com/su?wd=${keyWord}`, { adapter: jsonpAdapter, callbackParamName: "cb" })
}
