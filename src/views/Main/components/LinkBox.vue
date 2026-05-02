<template>
  <transition name="fade">
    <div v-if="LinkList.length > 0" class="z-50 box duration-300 rounded-2xl w-full flex-1 flex-col gap-10 px-10 py-10" @wheel="mouseWheel">
      <div class="flex items-center">
        <transition name="fade">
          <div v-if="!arrivedState.left" class="leftArrow absolute left-0 text-20 w-20 text-[#dddddd] i-carbon:chevron-left"></div>
        </transition>
        <div ref="scrollRef" class="scrollBar duration-300 h-30 flex gap-10 whitespace-nowrap overflow-x-scroll overflow-y-hidden shadow-inner">
          <div
            v-for="(item, index) in LinkList"
            :class="[mainStore.linkListPage == index + 1 ? 'text-[#2080f0] bg-white' : 'text-[#dddddd]']"
            class="w-auto rounded-8 px-10 border flex-center"
            @click="mainStore.linkListPage = index + 1"
          >
            {{ item.name }}
          </div>
        </div>
        <transition name="fade">
          <div v-if="!arrivedState.right" class="rightArrow absolute right-0 text-20 w-20 text-[#dddddd] i-carbon:chevron-right"></div>
        </transition>
      </div>
      <div class="flex-1 overflow-hidden relative scrollBar overflow-y-scroll">
        <transition-group :name="transitionName">
          <div
            v-for="(item, index) in LinkList"
            v-show="mainStore.linkListPage == index + 1"
            :key="index"
            class="px-10 max-sm-px-5 py-20 justify-between grid-cols-[repeat(auto-fill,60px)] grid-rows-[repeat(auto-fill,60px)] max-sm-grid-cols-[repeat(auto-fill,48px)] max-sm-grid-rows-[repeat(auto-fill,48px)] max-sm-gap-12 max-sm-gap-row-24 gap-30 rounded-2xl grid w-full absolute text-[#dddddd]"
          >
            <div
              v-for="child in item.child"
              :class="[child.size ? `col-span-${child.size[0]} row-span-${child.size[1]}` : 'wh-60 max-sm-wh-48']"
              class="flex-center shadow1 rounded-16 max-sm-rounded-12 relative hover:scale-105 duration-300"
            >
              <a :href="child.link" class="bg-white wh-full flex-1 flex rounded-16 max-sm-rounded-12 border-1 border-[#ffffffff] overflow-hidden">
                <img
                  v-lazy="child.avatar"
                  :data-src="child.avatar"
                  :style="getImageStyle(child)"
                  alt=""
                  class="flex-1 wh-full"
                  @error="handleImageError($event, child)"
                  @load="handleImageLoad($event, child)"
                />
              </a>
              <div class="absolute w-full bottom--20 max-sm-bottom--16 text-center text-nowrap text-ellipsis overflow-hidden">
                {{ child.name }}
              </div>
            </div>
          </div>
        </transition-group>
      </div>
    </div>
  </transition>
</template>
<script lang="ts" setup>
import { getLinkList } from "@/api"
import { useMainStore } from "@/stores/MainStore.ts"
import { useIntersectionObserver, useScroll } from "@vueuse/core"
import { onMounted, ref, watch } from "vue"

const mainStore = useMainStore()

const LinkList = ref<
  {
    name: string
    child: {
      name: string
      link: string
      avatar: string
      scale: number
      size: [number, number]
    }[]
  }[]
>([])

const scrollRef = ref()
const { arrivedState } = useScroll(scrollRef)
const FALLBACK_ICON = "./icons/null.png"
const DEFAULT_SCALE = 0.8
const imageLoadedMap = ref<Record<string, boolean>>({})

const getImageKey = (child: { link: string; avatar: string }) => `${child.link}|${child.avatar}`
const normalizeScale = (scale?: number) => {
  if (typeof scale !== "number" || Number.isNaN(scale)) return 1
  return scale > 2 ? scale / 100 : scale
}

const getImageStyle = (child: { link: string; avatar: string; scale: number }) => {
  const scaleValue = imageLoadedMap.value[getImageKey(child)] ? normalizeScale(child.scale) : DEFAULT_SCALE
  return {
    transform: `scale(${scaleValue})`
  }
}

const mouseWheel = (event: any) => {
  if (event.deltaY > 0 && mainStore.linkListPage < LinkList.value.length) mainStore.linkListPage += 1
  if (event.deltaY < 0 && mainStore.linkListPage > 1) mainStore.linkListPage -= 1
}

const transitionName = ref("slide-left")
watch(
  () => mainStore.linkListPage,
  (newPage, oldPage) => {
    transitionName.value = newPage > oldPage ? "slide-right" : "slide-left"
  }
)

onMounted(() => {
  getLinkList().then((res: any) => {
    LinkList.value = res
    imageLoadedMap.value = {}
  })
})

const handleImageLoad = (event: Event, child: any) => {
  const imgElement = event.target as HTMLImageElement
  const rawSrc = imgElement.getAttribute("src")
  if (rawSrc === FALLBACK_ICON) return
  imageLoadedMap.value[getImageKey(child)] = true
}

const handleImageError = (event: Event, child: any) => {
  const imgElement = event.target as HTMLImageElement
  imageLoadedMap.value[getImageKey(child)] = false
  imgElement.src = FALLBACK_ICON
  imgElement.onerror = null
}

const vLazy = {
  mounted(el: HTMLImageElement, binding: any) {
    el.src = FALLBACK_ICON
    lazyLoad(el, binding.value)
  }
}

const lazyLoad = (el: HTMLImageElement, src: string) => {
  const { stop } = useIntersectionObserver(
    el,
    ([{ isIntersecting }]) => {
      if (isIntersecting) {
        el.src = src
        stop()
      }
    },
    { threshold: 0.1 }
  )
}
</script>
<style lang="scss" scoped>
@media screen and (max-height: 576px) {
  .box,
  .scrollBar,
  .leftArrow,
  .rightArrow {
    flex: 0;
    height: 0;
  }
}
.scrollBar {
  ::-webkit-scrollbar {
    display: none;
    width: 0;
    height: 0;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.leftArrow {
  animation: leftAm 0.5s ease-in-out infinite alternate;
}
.rightArrow {
  animation: rightAm 0.5s ease-in-out infinite alternate;
}
</style>
