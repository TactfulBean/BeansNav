<template>
  <div
    :class="[isHover || isFocus ? 'w-full' : 'w-230 ']"
    class="flex-center items-start duration-300 max-w-530"
    @mouseleave="isHover = false"
    @mouseover="isHover = true"
  >
    <input
      :class="[isFocus ? 'bg-white text-black placeholder:text-[#00000099]' : 'bg-[#FFFFFF3F] text-white placeholder:text-[#FFFFFFDD]']"
      :value="text"
      class="w-full duration-300 text-center h-40 rounded-20 border-none shadow1 outline-none"
      placeholder="Bing搜索"
      @blur="isHover ? (isFocus = true) : (isFocus = false)"
      @focus="isFocus = true"
    />
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue"

const isHover = ref(false)
const isFocus = ref(false)
const text = ref("")
</script>
<style lang="scss" scoped></style>
