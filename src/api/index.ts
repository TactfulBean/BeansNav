import { Wallpaper } from "@/types/Wallpaper"
import Request from "@/utils/request.ts"
import jsonpAdapter from "axios-jsonp"

const WALLPAPER = import.meta.env.VITE_WALLPAPER

export const getWallPaper = () => {
  return Request.get<Wallpaper>(WALLPAPER)
}
export const getSearchSuggestions = async (keyWord: string) => {
  // @ts-ignore
  return Request.get(`https://suggestion.baidu.com/su?wd=${keyWord}`, { adapter: jsonpAdapter, callbackParamName: "cb" })
}
