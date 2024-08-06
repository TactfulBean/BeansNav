<template>
  <div class="wh-full absolute-0 z-40 flex-center">
    <div class="absolute max-w-1200 w-full flex-col gap-10 px-10 py-10 bottom-40 top-40">
      <TopBox></TopBox>
      <LinkBox></LinkBox>
    </div>
  </div>
</template>
<script lang="ts" setup>
import LinkBox from "@/views/Main/components/LinkBox.vue"
import TopBox from "@/views/Main/components/TopBox.vue"
</script>
<style lang="scss" scoped></style>
