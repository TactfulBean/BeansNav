import { defineStore } from "pinia"

interface config {
	searchEngine: number
	wallPaperType: number
	logVersion: string
	wallPaperDate: null
	wallPaperSrc: null
}
// 默认设置
const defaultConfig: config = {
	searchEngine: 1,
	wallPaperType: 1,
	logVersion: "1.0.0",
	wallPaperDate: null,
	wallPaperSrc: null
}
let isMobile = () => {
	return navigator.userAgent.match(
		/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
	)
}
let getDate = () => {
	const date = new Date()
	const year = date.getFullYear().toString()
	const month = (date.getMonth() + 1).toString().padStart(2, "0")
	const day = date.getDate().toString()
	return year + month + day
}

const getWallPaperDate = () => localStorage.getItem("wallPaperDate") || defaultConfig.wallPaperDate
const getWallPaperSrc = () => localStorage.getItem("wallPaperSrc") || defaultConfig.wallPaperSrc
const getSearchEngine = () => localStorage.getItem("searchEngine") || defaultConfig.searchEngine
const getWallPaperType = () => localStorage.getItem("wallPaperType") || defaultConfig.wallPaperType
const getLogVersion = () => localStorage.getItem("logVersion") || defaultConfig.logVersion

export const useSettingStore = defineStore("settingStore", {
	state: () => {
		return {
			// 移动端判断
			isMobile: isMobile(),
			// 获取日期
			getDate: getDate(),
			// 获取本地存储壁纸的日期
			getWallPaperDate: getWallPaperDate(),

			getWallPaperSrc: getWallPaperSrc(),
			// Iconfont图标地址
			IconFontURL: "//at.alicdn.com/t/c/font_3627162_zg6nxmjid9n.js",
			// 搜索引擎
			searchEngine: <number>getSearchEngine(),
			// 壁纸类型
			wallPaperType: <number>getWallPaperType(),
			// 日志版本号
			logVersion: getLogVersion()
		}
	},
	getters: {}
})
