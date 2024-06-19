import { defineStore } from "pinia"

// 默认设置
const defaultConfig: {
  wallPaperType: number
  wallPaperDate: string
  wallPaperSrc: string
} = {
  wallPaperType: 1,
  wallPaperDate: "",
  wallPaperSrc: ""
}

export const useWallPaperStore = defineStore("wallPaperStore", {
  state: () => ({
    wallPaperDate: defaultConfig.wallPaperDate,
    wallPaperSrc: defaultConfig.wallPaperSrc,
    wallPaperType: defaultConfig.wallPaperType
  }),
  persist: true
})
