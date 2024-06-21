<template>
  <Home></Home>
</template>
<script lang="ts" setup>
import { cursorInit } from "@/utils/cursor.ts"
import Home from "@/views/Home.vue"
import { onMounted } from "vue"

onMounted(() => {
  cursorInit()
})
</script>
<style lang="scss" scoped></style>
