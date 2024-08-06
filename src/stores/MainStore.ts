import { useWindowSize } from "@vueuse/core"
import { defineStore } from "pinia"

export const useMainStore = defineStore("mainStore", {
  state: () => ({
    darkTheme: false,
    linkListPage: 1
  }),
  getters: {},
  actions: {
    getScreenSize: () => {
      const { width, height } = useWindowSize()

      return { width: width.value, height: height.value }
    }
  },
  persist: true
})
