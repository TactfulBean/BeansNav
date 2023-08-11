export interface Wallpaper {
	code: number
	result: Result[]
	msg: string
}
interface Result {
	copyright: string
	copyrightlink: string
	title: string
	url: string
	date: string
}
