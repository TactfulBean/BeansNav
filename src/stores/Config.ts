import { defineStore } from "pinia"

interface config {
	searchEngine: number
	wallPaperType: number
	logVersion: string
	wallPaperDate: any
	wallPaperSrc: any
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

export const useSettingStore = defineStore("settingStore", {
	state: () => ({
		// 移动端判断
		isMobile: isMobile(),
		// 获取本地存储壁纸的日期
		wallPaperDate: defaultConfig.wallPaperDate,

		wallPaperSrc: defaultConfig.wallPaperSrc,
		// Iconfont图标地址
		IconFontURL: "//at.alicdn.com/t/c/font_3627162_zg6nxmjid9n.js",
		// 搜索引擎
		searchEngine: defaultConfig.searchEngine,
		// 壁纸类型
		wallPaperType: defaultConfig.wallPaperType,
		// 日志版本号
		logVersion: defaultConfig.logVersion
	}),
	persist: true
})
