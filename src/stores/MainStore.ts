import { useWindowSize } from "@vueuse/core"
import { defineStore } from "pinia"

export const useMainStore = defineStore("mainStore", {
  state: () => ({
    darkTheme: false,
    linkListPage: 1,
    size:{
      width:0,
      height:0
    }
  }),
  getters: {},
  actions: {
    getScreenSize() {
      const { width, height } = useWindowSize()
      this.size.width = width
      this.size.height = height
    }
  },
  persist: true
})
