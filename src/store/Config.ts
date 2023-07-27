import { defineStore } from "pinia";
import {
  setDateVersion,
  setSearchEngine,
  setWallPaperDate,
  setWallPaperSrc,
  setWallPaperType,
} from "../config/Config.ts";

interface config {
  searchEngine: number;
  wallPaperType: number;
  logVersion: string;
  wallPaperDate: null;
  wallPaperSrc: null;
}
// 默认设置
const defaultConfig: config = {
  searchEngine: 1,
  wallPaperType: 1,
  logVersion: "1.0.0",
  wallPaperDate: null,
  wallPaperSrc: null,
};
let isMobile = () => {
  return navigator.userAgent.match(
    /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
  );
};
let getDate = () => {
  const date = new Date();
  const year = date.getFullYear().toString();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString();
  return year + month + day;
};

export const useSettingStore = defineStore("settingStore", {
  state: () => ({
    // 移动端判断
    isMobile: isMobile(),
    // 获取日期
    date: getDate(),
    // 获取本地存储壁纸的日期
    wallPaperDate:
      localStorage.getItem("wallPaperDate") || defaultConfig.wallPaperDate,

    wallPaperSrc:
      localStorage.getItem("wallPaperSrc") || defaultConfig.wallPaperSrc,
    // Iconfont图标地址
    IconFontURL: "//at.alicdn.com/t/c/font_3627162_zg6nxmjid9n.js",
    // 搜索引擎
    searchEngine:
      localStorage.getItem("searchEngine") || defaultConfig.searchEngine,
    // 壁纸类型
    wallPaperType:
      localStorage.getItem("wallPaperType") || defaultConfig.wallPaperType,
    // 日志版本号
    logVersion: localStorage.getItem("logVersion") || defaultConfig.logVersion,
  }),
  getters: {},
  actions: {
    setSearchEngine(value) {
      this.searchEngine = value;
      setSearchEngine(value);
    },
    setWallPaperType(value) {
      this.wallPaperType = value;
      setWallPaperType(value);
    },
    setWallPaperDate(value) {
      this.wallPaperDate = value;
      setWallPaperDate(value);
    },
    setWallPaperSrc(value) {
      this.wallPaperSrc = value;
      setWallPaperSrc(value);
    },
    setDateVersion(value) {
      this.logVersion = value;
      setDateVersion(value);
    },
  },
});
