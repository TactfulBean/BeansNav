<template>
  <transition name="fade">
    <div class="bg-color_bg_opacity rounded-2xl w-full h-250">
      <SearchBox></SearchBox>
    </div>
  </transition>
</template>
<script lang="ts" setup>
import SearchBox from "@/views/Main/components/SearchBox.vue"
</script>
<style lang="scss" scoped></style>
