<template>
  <div
    ref="wallPaper"
    :style="{ width: `${size?.width}` + 'px', height: `${size?.height}` + 'px' }"
    class="bg-center bg-cover duration-1000 opacity-0 pointer-events-none"
  ></div>
  <div class="grayBG absolute-0 wh-full z-1 bg-[#00000019] pointer-events-none"></div>
</template>
<script lang="ts" setup>
import { getWallPaper } from "@/api"
import { useWallPaperStore } from "@/stores/Config.ts"
import { useMainStore } from "@/stores/MainStore.ts"
import { getDate } from "@/utils"
import { Message } from "@arco-design/web-vue"
import { onMounted, ref } from "vue"

const mainStore = useMainStore()
const wallPaperStore = useWallPaperStore()
const wallPaper = ref()
const wallImage = new Image()

wallImage.onload = () => {
  wallPaper.value.style.backgroundImage = `url(${wallImage.src})`
  wallPaper.value.style.opacity = 1
}

const size = ref()
onMounted(async () => {
  await setWallPaper()
  size.value = mainStore.getScreenSize()
})

const setWallPaper = async () => {
  try {
    const currentDate = getDate()
    if (currentDate === wallPaperStore.wallPaperDate && wallPaperStore.wallPaperSrc) {
      wallImage.src = wallPaperStore.wallPaperSrc
    } else {
      const res = await getWallPaper()
      const newWallPaperSrc = res.data.result[0].url
      wallPaperStore.wallPaperSrc = newWallPaperSrc
      wallPaperStore.wallPaperDate = currentDate
      wallImage.src = newWallPaperSrc
    }
  } catch (error) {
    Message.error("壁纸加载失败")
  }
}
</script>
<style lang="scss" scoped>
.grayBG {
  background-image: radial-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 100%), radial-gradient(rgba(0, 0, 0, 0) 33%, rgba(0, 0, 0, 0.2) 166%),
    linear-gradient(180deg, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 0.3) 100%);
}
</style>
