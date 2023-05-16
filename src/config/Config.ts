// 搜索引擎类型
const setSearchEngine = (value) => {
	localStorage.setItem("searchEngine", value);
};
// 壁纸播放类型
const setWallPaperType = (value) => {
	localStorage.setItem("wallPaperType", value);
};
// 壁纸日期
const setWallPaperDate = (value) => {
	localStorage.setItem("wallPaperDate", value);
};
// 壁纸URL
const setWallPaperSrc = (value) => {
	localStorage.setItem("wallPaperSrc", value);
};
export default {
	setSearchEngine,
	setWallPaperType,
	setWallPaperDate,
	setWallPaperSrc
};
