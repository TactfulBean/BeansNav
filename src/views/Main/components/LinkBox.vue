<template>
  <transition name="fade">
    <div class="box duration-300 rounded-2xl w-full flex-1 flex-col gap-10 px-10 py-10">
      <div class="scrollBar h-30 w-full flex gap-10 whitespace-nowrap overflow-x-scroll overflow-y-hidden shadow-inner">
        <div v-for="(item, index) in LinkList" class="w-auto rounded-8 px-10 border flex-center text-[#eeeeee]" @click="page = index + 1">
          {{ item.name }}
        </div>
      </div>
      <div class="flex-1 overflow-hidden relative">
        <transition v-for="(item, index) in LinkList" name="fade">
          <div v-show="page == index + 1" class="rounded-2xl wh-full absolute bg-color_bg_opacity text-[#eeeeee]">{{ item.name }}</div>
        </transition>
      </div>
    </div>
  </transition>
</template>
<script lang="ts" setup>
import { onMounted, ref } from "vue"
import Request from "@/utils/request.ts"
const page = ref(1)

const LinkList = ref()

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
</style>
