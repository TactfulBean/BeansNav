interface config {
	searchEngine: number;
}
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
	getSearchEngine,
	setSearchEngine
};
