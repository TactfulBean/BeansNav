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
let getDate = () => {
	let date = new Date();
	let year = date.getFullYear().toString();
	let mon = date.getMonth() + 1;
	let month = mon < 10 ? "0" + mon : mon;
	let day = date.getDate().toString();
	return year + month + day;
};
let getWallPaperDate = () => {
	if (localStorage.getItem("wallPaperDate")) {
		return localStorage.getItem("wallPaperDate");
	}
	return null;
};
let getWallPaperSrc = () => {
	return localStorage.getItem("wallPaperSrc");
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
			// 移动端判断
			isMobile: isMobile(),
			// 获取日期
			getDate: getDate(),
			// 获取本地存储壁纸的日期
			getWallPaperDate: getWallPaperDate(),

			getWallPaperSrc: getWallPaperSrc(),
			// Iconfont图标地址
			IconFontURL: "//at.alicdn.com/t/c/font_3627162_abh6jt8b3s9.js",
			// 搜索引擎
			searchEngine: <number>getSearchEngine(),
			// 壁纸类型
			wallPaperType: <number>getWallPaperType()
		};
	}
});
