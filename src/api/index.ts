import axios from "@/utils/request"

export const getWeather = () => {
	return axios({
		method: "GET",
		url: "https://api.oioweb.cn/api/weather/GetWeather"
	})
}
export const getLinkBox = () => {
	return axios({
		method: "GET",
		url: "https://alist.tactfulbean.top/d/%F0%9F%92%BE%E4%B8%83%E7%89%9B%E4%BA%91Kodo/LinkList.json"
	})
}
export const getUpdateLog = () => {
	return axios({
		method: "GET",
		url: "https://alist.tactfulbean.top/d/%F0%9F%92%BE%E4%B8%83%E7%89%9B%E4%BA%91Kodo/DateLog.json"
	})
}
