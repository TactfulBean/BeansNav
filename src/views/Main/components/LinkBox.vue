<template>
  <transition name="fade">
    <div class="bg-color_bg_opacity rounded-2xl w-full flex-1 flex-col gap-10 px-10 py-10">
      <div class="h-30 w-full flex gap-10">
        <div class="w-auto rounded-2xl px-10 border flex-center" @click="page = 1">1</div>
        <div class="w-auto rounded-2xl px-10 border flex-center" @click="page = 2">2</div>
        <div class="w-auto rounded-2xl px-10 border flex-center" @click="page = 3">3</div>
      </div>
      <div class="flex-1 overflow-hidden">
        <transition :duration="0" name="fade">
          <div v-show="page == 1" class="rounded-2xl wh-full bg-color_bg_opacity">111</div>
        </transition>
        <transition :duration="0" name="fade">
          <div v-show="page == 2" class="rounded-2xl wh-full bg-color_bg_opacity">2222</div>
        </transition>
        <transition :duration="0" name="fade">
          <div v-show="page == 3" class="rounded-2xl wh-full bg-color_bg_opacity">3333333</div>
        </transition>
      </div>
    </div>
  </transition>
</template>
<script lang="ts" setup>
import { ref } from "vue"

const page = ref(1)
</script>
<style lang="scss" scoped></style>
