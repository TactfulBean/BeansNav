import { Wallpaper } from "@/types/Wallpaper"
import Request from "@/utils/request.ts"

const WALLPAPER = import.meta.env.VITE_WALLPAPER
export const getWallPaper = () => {
  return Request.get<Wallpaper>(WALLPAPER)
}
