// 搜索引擎类型
export const setSearchEngine = (value) => {
	localStorage.setItem("searchEngine", value)
}
// 壁纸播放类型
export const setWallPaperType = (value) => {
	localStorage.setItem("wallPaperType", value)
}
// 壁纸日期
export const setWallPaperDate = (value) => {
	localStorage.setItem("wallPaperDate", value)
}
// 壁纸URL
export const setWallPaperSrc = (value) => {
	localStorage.setItem("wallPaperSrc", value)
}
// 当前日志版本
export const setDateVersion = (value) => {
	localStorage.setItem("logVersion", value)
}
