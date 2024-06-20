<template>
  <div class="absolute w-60% max-sm:w-90% top-45% left-center">
    <a-tabs :animation="true" size="small" type="text">
      <a-tab-pane v-for="(item, index) in LinkList" :key="item.name" :title="item.name">
        <div class="h-320 max-sm:hc-300 overflow-y-auto overflow-x-hidden">
          <div class="flex flex-wrap">
            <div v-for="(item2, index2) in item.child" :key="index2" class="my-5 inline-block drop-shadow-md flex-[0_0_10%] max-sm:flex-[0_0_25%]">
              <div class="p-5 flex-center flex-col duration-300 hover:scale-105">
                <a :href="item2.link">
                  <a-avatar
                    :imageUrl="item2.avatar"
                    :size="mainStore.getScreenSize.width <= 576 ? 44 : 52"
                    :style="{ backgroundColor: item2.avatar == '' ? '#c9cdd4' : '#00000000' }"
                    shape="square"
                    @error="error(index, index2)"
                  >
                    <span class="wh-full flex-center">{{ item2.name }}</span>
                  </a-avatar>
                </a>
                <span class="text-ellipsis overflow-hidden whitespace-nowrap py-5 w-75 text-center color-color_text_4">{{ item2.name }}</span>
              </div>
            </div>
          </div>
        </div>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script lang="ts" setup>
import { useMainStore } from "@/stores/MainStore.ts"
import { onMounted, ref } from "vue"
import Request from "@/utils/request.ts"
const mainStore = useMainStore()

const LinkList = ref()

onMounted(() => {
  Request.get("./config/LinkList.json").then((res) => {
    LinkList.value = res.data
  })
})

const error = (index: number, index2: number) => {
  LinkList.value[index].child[index2].avatar = ""
}
</script>
<style lang="scss" scoped></style>
