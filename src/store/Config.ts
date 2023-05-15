import { defineStore } from "pinia";

interface config {
	searchEngine: number;
	wallPaperType: number;
}
// 默认设置
const defaultConfig: config = {
	searchEngine: 1,
	wallPaperType: 1
};
let isMobile = () => {
	return navigator.userAgent.match(
		/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
	);
};
let getSearchEngine = () => {
	if (localStorage.getItem("searchEngine")) {
		return localStorage.getItem("searchEngine");
	}
	return defaultConfig.searchEngine;
};
let getWallPaperType = () => {
	if (localStorage.getItem("wallPaperType")) {
		return localStorage.getItem("wallPaperType");
	}
	return defaultConfig.searchEngine;
};
export default defineStore("Config", {
	state: () => {
		return {
			isMobile: isMobile(),
			IconFontURL: "//at.alicdn.com/t/c/font_3627162_abh6jt8b3s9.js",
			// 搜索引擎
			searchEngine: getSearchEngine(),
			// 壁纸类型
			wallPaperType: getWallPaperType()
		};
	}
});
