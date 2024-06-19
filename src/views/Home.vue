<template>
  <div class="flex-center wh-full">
    <a-button class="m-5" type="outline" @click="darkTheme">DarkTheme</a-button>
    <a-button class="m-5" type="outline" @click="lightTheme">LightTheme</a-button>
  </div>
</template>
<script lang="ts" setup>
const darkTheme = () => {
  document.body.setAttribute("arco-theme", "dark")
}
const lightTheme = () => {
  document.body.removeAttribute("arco-theme")
}
</script>
<style lang="scss" scoped></style>
