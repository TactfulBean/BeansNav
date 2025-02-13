<template>
  <div
    :style="{ height: Show ? result.length * 26 + 'px' : 0, opacity: Show ? 1 : 0 }"
    class="duration-300 rounded-15 overflow-hidden bg-[#ffffffcc]"
  >
    <div
      v-for="(item, index) in result"
      :key="item"
      :class="[selectIndex == index ? 'bg-[#9f9f9fff] tracking-1' : '']"
      :data-index="index"
      class="duration-300 h-26 px-15 cursor-pointer flex items-center gap-10"
      @click="clickToSearch(item)"
      @mouseover="selectIndex = index"
    >
      <div class="i-carbon:search color-[#2080f0] text-18"></div>
      <div class="text-nowrap">
        {{ item }}
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { getSearchSuggestions } from "@/api"
import { ref } from "vue"

const result = ref([])

const selectIndex = ref(-1)

const KeyWord = defineModel<string>("KeyWord")
const Show = defineModel<boolean>("Show")

let time: number = 0
const getResult = () => {
  const now = Date.now()
  time = now
  selectIndex.value = -1
  if (KeyWord.value) {
    getSearchSuggestions(KeyWord.value).then((res: any) => {
      if (now == time) {
        result.value = res.data.s || []
      }
    })
  } else {
    result.value = []
  }
}

const changeSelect = (variation: 1 | -1) => {
  const len = result.value.length
  let newIndex = selectIndex.value + variation
  if (newIndex < 0) newIndex = len - 1
  else if (newIndex >= len) newIndex = 0
  selectIndex.value = newIndex
  KeyWord.value = result.value[selectIndex.value]
}

const clickToSearch = (text: string) => {
  KeyWord.value = text
  emits("search")
}

const emits = defineEmits<{
  search: []
}>()

defineExpose({
  changeSelect,
  getResult
})
</script>
<style lang="scss" scoped></style>
