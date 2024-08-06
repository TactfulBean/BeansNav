<template>
  <div
    :class="[isHover || isFocus ? 'w-full' : 'w-230 ']"
    class="flex-center items-start duration-600 max-w-530 relative"
    @mouseleave="isHover = false"
    @mouseover="isHover = true"
  >
    <input
      ref="InputRef"
      v-model="text"
      :class="[
        isHover || isFocus ? 'w-full' : 'w-230',
        isFocus ? 'bg-[#ffffffcc] placeholder:text-[#00000099]' : 'bg-[#FFFFFF3F] text-white placeholder:text-[#FFFFFFDD]'
      ]"
      class="duration-300 backdrop-blur-sm text-center h-40 rounded-20 border-none shadow1 outline-none"
      placeholder="Bing搜索"
      @blur="isHover ? (isFocus = true) : (isFocus = false)"
      @focus="isFocus = true"
      @keyup="inputKey"
    />
    <div
      v-if="isFocus"
      class="flex-center shadow_special duration-300 bg-white hover:bg-[#FFFFFFB3] absolute rounded-15 wh-30 right-5 my-5 cursor-pointer"
      @click="search"
    >
      <div class="i-carbon:search color-[#2080f0] text-18"></div>
    </div>
    <transition name="fade">
      <SearchSuggestion
        ref="SearchSuggestionRef"
        v-model:KeyWord="text"
        v-model:Show="isFocus"
        :class="[isHover || isFocus ? 'w-full' : 'w-230 ']"
        class="absolute top-50"
      ></SearchSuggestion>
    </transition>
  </div>
</template>
<script lang="ts" setup>
import SearchSuggestion from "@/views/Main/components/SearchSuggestion.vue"
import { onStartTyping } from "@vueuse/core"
import { ref } from "vue"

const isHover = ref(false)
const isFocus = ref(false)
const text = ref("")

const SearchSuggestionRef = ref()
const InputRef = ref()

// 搜索事件
const search = () => {
  if (text.value.trim()) {
    window.location.href = "https://cn.bing.com/search?q=" + text.value
  }
}

const inputKey = (key: any) => {
  switch (key.keyCode) {
    case 38:
      SearchSuggestionRef.value.changeSelect(-1)
      break
    case 40:
      SearchSuggestionRef.value.changeSelect(1)
      break
    case 13:
      search()
      break
    default:
      SearchSuggestionRef.value.getResult()
  }
}

onStartTyping(() => {
  if (!InputRef.value.active) InputRef.value.focus()
})
</script>
<style lang="scss" scoped></style>
