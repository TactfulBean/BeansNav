export type Wallpaper = {
  code: number
  result: Result[]
  msg: string
}
type Result = {
  copyright: string
  copyrightlink: string
  title: string
  url: string
  date: string
}
