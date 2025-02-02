<template>
  <div
    ref="wallPaper"
    :style="{
      width: `${mainStore.size?.width}px`,
      height: `${mainStore.size?.height}px`,
      backgroundSize: 'cover'
    }"
    class="bg-center transition-all duration-300 ease-out opacity-0 pointer-events-none"
  ></div>
  <div class="grayBG absolute-0 wh-full z-1 bg-[#00000019] pointer-events-none"></div>
</template>
<script lang="ts" setup>
// import { getWallPaper } from "@/api"
// import { useWallPaperStore } from "@/stores/Config.ts"
import { useMainStore } from "@/stores/MainStore.ts" // import { getDate } from "@/utils"
// import { Message } from "@arco-design/web-vue"
import { onMounted, ref } from "vue"

const mainStore = useMainStore()
// const wallPaperStore = useWallPaperStore()
const wallPaper = ref(null)
const wallImage = new Image()

wallImage.onload = () => {
  if (wallPaper.value) {
    wallPaper.value.style.backgroundImage = `url(${wallImage.src})`
    wallPaper.value.style.opacity = 1
  }
}

onMounted(async () => {
  mainStore.getScreenSize()
  await setWallPaper()
})

const setWallPaper = async () => {
  const tempImg = new Image()
  tempImg.src = "https://bing.tactfulbean.top/1920x1080_302.php"
  tempImg.onload = () => {
    wallImage.src = tempImg.src
  }
}
</script>
<style lang="scss" scoped>
.grayBG {
  background-image: radial-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 100%), radial-gradient(rgba(0, 0, 0, 0) 33%, rgba(0, 0, 0, 0.2) 166%),
    linear-gradient(180deg, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 0.3) 100%);
}
</style>
