import { useWindowSize } from "@vueuse/core"
import { defineStore } from "pinia"

export const useMainStore = defineStore("mainStore", {
  state: () => ({
    darkTheme: false
  }),
  getters: {
    getScreenSize: () => {
      const { width, height } = useWindowSize()

      return { width: width.value, height: height.value }
    }
  },
  actions: {},
  persist: true
})
