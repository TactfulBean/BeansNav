<template>
  <transition name="fade">
    <div class="rounded-2xl flex-center gap-15 flex-col w-full h-250 z-100">
      <TimeBox></TimeBox>
      <SearchBox></SearchBox>
    </div>
  </transition>
</template>
<script lang="ts" setup>
import SearchBox from "@/views/Main/components/SearchBox.vue"
import TimeBox from "@/views/Main/components/TimeBox.vue"
</script>
<style lang="scss" scoped></style>
