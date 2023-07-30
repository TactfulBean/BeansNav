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
		logVersion: defaultConfig.logVersion
	}),
	persist: true
})
