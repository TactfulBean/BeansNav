// 搜索引擎类型
const setSearchEngine = (value) => {
	localStorage.setItem("searchEngine", value);
};
// 壁纸播放类型
const setWallPaperType = (value) => {
	localStorage.setItem("wallPaperType", value);
};
export default {
	setSearchEngine,
	setWallPaperType
};
