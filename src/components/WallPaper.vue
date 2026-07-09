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
import { getWallPaper } from "@/api"
import { useWallPaperStore } from "@/stores/Config.ts"
import { useMainStore } from "@/stores/MainStore.ts"
import { onMounted, useTemplateRef } from "vue"

const mainStore = useMainStore()
const wallPaperStore = useWallPaperStore()
const wallPaper = useTemplateRef<HTMLDivElement>("wallPaper")

onMounted(async () => {
  mainStore.getScreenSize()

  if (wallPaperStore.wallPaperSrc) {
    applyWallPaper(wallPaperStore.wallPaperSrc)
  }

  await setWallPaper()
})

const setWallPaper = async () => {
  const response = await getWallPaper()
  const wallPaperSrc = response?.data?.cover_4k || response?.data?.cover
  const wallPaperDate = response?.data?.update_date

  if (!wallPaperSrc) return
  if (wallPaperSrc === wallPaperStore.wallPaperSrc) {
    if (wallPaperDate !== wallPaperStore.wallPaperDate) {
      wallPaperStore.setWallPaper({
        src: wallPaperSrc,
        date: wallPaperDate
      })
    }
    return
  }

  try {
    await preloadWallPaper(wallPaperSrc)
    applyWallPaper(wallPaperSrc)
    wallPaperStore.setWallPaper({
      src: wallPaperSrc,
      date: wallPaperDate
    })
  } catch (error) {
    console.error(error)
  }
}

const preloadWallPaper = (src: string) => {
  return new Promise<void>((resolve, reject) => {
    const image = new Image()
    image.onload = () => resolve()
    image.onerror = () => reject(new Error(`Failed to load wallpaper: ${src}`))
    image.src = src
  })
}

const applyWallPaper = (src: string) => {
  if (!wallPaper.value) return

  wallPaper.value.style.backgroundImage = `url(${src})`
  wallPaper.value.style.opacity = "1"
}
</script>
<style lang="scss" scoped>
.grayBG {
  background-image: radial-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 100%), radial-gradient(rgba(0, 0, 0, 0) 33%, rgba(0, 0, 0, 0.2) 166%),
    linear-gradient(180deg, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 0.3) 100%);
}
</style>
