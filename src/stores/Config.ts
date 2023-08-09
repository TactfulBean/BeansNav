import { defineStore } from "pinia"

interface config {
	searchEngine: number
	wallPaperType: number
	logVersion: string
	wallPaperDate: any
	wallPaperSrc: any
	linkBoxActiveKey: number
	time: number
	weather: {
		city: string
		temp: string
		state: string
	}
}
// 默认设置
const defaultConfig: config = {
	searchEngine: 1,
	wallPaperType: 1,
	logVersion: "1.0.0",
	wallPaperDate: null,
	wallPaperSrc: null,
	linkBoxActiveKey: 0,
	time: 0,
	weather: {
		city: "--",
		temp: "--",
		state: "--"
	}
}

export const useSettingStore = defineStore("settingStore", {
	state: () => ({
		// 获取本地存储壁纸的日期
		wallPaperDate: defaultConfig.wallPaperDate,

		wallPaperSrc: defaultConfig.wallPaperSrc,
		// 搜索引擎
		searchEngine: defaultConfig.searchEngine,
		// 壁纸类型
		wallPaperType: defaultConfig.wallPaperType,
		// 日志版本号
		logVersion: defaultConfig.logVersion,

		linkBoxActiveKey: defaultConfig.linkBoxActiveKey,

		time: defaultConfig.time,
		weather: defaultConfig.weather
	}),
	persist: true
})
