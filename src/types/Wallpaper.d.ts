export type Wallpaper = {
  code: number
  message: string
  data: WallpaperData
}

export type WallpaperData = {
  title: string
  headline: string
  description: string
  main_text: string
  cover: string
  cover_4k: string
  copyright: string
  update_date: string
  update_date_at: number
}
