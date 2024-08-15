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
      <div class="flex-1 pt-20 overflow-hidden relative scrollBar overflow-y-scroll">
        <transition v-for="(item, index) in LinkList" name="fade">
          <div
            v-show="mainStore.linkListPage == index + 1"
            class="justify-between grid-cols-[repeat(auto-fill,60px)] grid-rows-[repeat(auto-fill,60px)] max-sm-grid-cols-[repeat(auto-fill,48px)] max-sm-grid-rows-[repeat(auto-fill,48px)] max-sm-gap-26 gap-30 rounded-2xl grid w-full absolute text-[#dddddd]"
          >
            <div
              v-for="child in item.child"
              :class="[child.size ? ` col-span-${child.size[0]} row-span-${child.size[1]}` : '']"
              class="bg-white rounded-16 shadow1 max-sm-w-48 max-sm-h-48 gap-8 relative hover:scale-105 duration-300"
            >
              <a :href="child.link" class="flex-center wh-full rounded-16 overflow-hidden">
                <img :src="child.avatar" :style="{ scale: child.scale + '%' }" alt="" class="wh-full" />
              </a>
              <div class="absolute w-full bottom--20 max-sm-bottom--16 text-center text-nowrap text-ellipsis overflow-hidden">
                {{ child.name }}
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </transition>
</template>
<script lang="ts" setup>
import { useMainStore } from "@/stores/MainStore.ts"
import { useScroll } from "@vueuse/core"
import { onMounted, ref } from "vue"
import Request from "@/utils/request.ts"
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

const mouseWheel = (event: any) => {
  if (event.deltaY > 0 && mainStore.linkListPage < LinkList.value.length) mainStore.linkListPage += 1
  if (event.deltaY < 0 && mainStore.linkListPage > 1) mainStore.linkListPage -= 1
}

onMounted(() => {
  Request.get("https://alistapi.tactfulbean.top/d/%F0%9F%92%BE%E4%B8%83%E7%89%9B%E4%BA%91Kodo/LinkList.json").then((res: any) => {
    LinkList.value = res.data.result
  })
})
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
