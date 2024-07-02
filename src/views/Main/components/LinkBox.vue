<template>
  <transition name="fade">
    <div class="box duration-300 rounded-2xl w-full flex-1 flex-col gap-10 px-10 py-10">
      <div class="flex items-center">
        <transition name="fade">
          <div v-if="!arrivedState.left" class="leftArrow absolute left-0 text-20 w-20 text-[#dddddd] i-carbon:chevron-left"></div>
        </transition>
        <div
          ref="scrollRef"
          class="scrollBar flex-1 duration-300 h-30 w-full flex gap-10 whitespace-nowrap overflow-x-scroll overflow-y-hidden shadow-inner"
        >
          <div v-for="(item, index) in LinkList" class="w-auto rounded-8 px-10 border flex-center text-[#dddddd]" @click="page = index + 1">
            {{ item.name }}
          </div>
        </div>
        <transition name="fade">
          <div v-if="!arrivedState.right" class="rightArrow absolute right-0 text-20 w-20 text-[#dddddd] i-carbon:chevron-right"></div>
        </transition>
      </div>
      <div class="flex-1 overflow-hidden relative">
        <transition v-for="(item, index) in LinkList" name="fade">
          <div v-show="page == index + 1" class="rounded-2xl wh-full absolute bg-color_bg_opacity text-[#dddddd]">{{ item.name }}</div>
        </transition>
      </div>
    </div>
  </transition>
</template>
<script lang="ts" setup>
import { useScroll } from "@vueuse/core"
import { onMounted, ref } from "vue"
import Request from "@/utils/request.ts"
const page = ref(1)

const LinkList = ref()

const scrollRef = ref()
const { arrivedState } = useScroll(scrollRef)
onMounted(() => {
  Request.get("./config/LinkList.json").then((res) => {
    LinkList.value = res.data
  })
})
</script>
<style lang="scss" scoped>
@media screen and (max-height: 576px) {
  .box {
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
