interface config {
	searchEngine: number;
}
const IconFontURL = "//at.alicdn.com/t/c/font_3627162_abh6jt8b3s9.js";

const isMobile = () => {
	return navigator.userAgent.match(
		/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
	);
};

// 默认设置
const defaultConfig: config = {
	searchEngine: 1
};
// 选择的搜索引擎
const getSearchEngine = () => {
	if (localStorage.getItem("searchEngine")) {
		return localStorage.getItem("searchEngine");
	}
	return defaultConfig.searchEngine;
};
const setSearchEngine = (value) => {
	localStorage.setItem("searchEngine", value);
};

export default {
	IconFontURL,
	isMobile,
	getSearchEngine,
	setSearchEngine
};
