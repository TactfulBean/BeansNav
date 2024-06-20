<template>
  <Header></Header>
  <Main></Main>
  <ThemeSwitch></ThemeSwitch>
  <Footer></Footer>
  <WallPaper></WallPaper>
</template>
<script lang="ts" setup>
import ThemeSwitch from "@/components/ThemeSwitch.vue"
import WallPaper from "@/components/WallPaper.vue"
import Header from "@/views/Header/index.vue"
import Main from "@/views/Main/index.vue"
import Footer from "@/views/Footer/index.vue"
</script>
<style lang="scss" scoped></style>
