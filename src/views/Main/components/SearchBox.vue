<template>
  <div class="flex-center w-full h-120 duration-300" @mouseleave="isHover = false" @mouseover="isHover = true">
    <input
      :class="[
        isHover || isFocus ? 'w-530 ' : 'w-230 ',
        isFocus ? 'bg-white text-black placeholder:text-[#00000099]' : 'bg-[#FFFFFF3F] text-white placeholder:text-[#FFFFFFDD]'
      ]"
      :value="text"
      class="duration-300 text-center h-40 rounded-20 border-none shadow1 outline-none"
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
