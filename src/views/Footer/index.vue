<template>
  <div class="footer absolute bottom-10 flex-center text-12 w-full text-[--b-color-text-3] z-50">
    <div class="cursor-default">© 2024</div>
    <a class="mx-3 duration-300 hover:text-[--b-color-text-2]" href="https://github.com/TactfulBean">TactfulBean</a>
    <div class="cursor-default">|</div>
    <a class="mx-3 duration-300 hover:text-[--b-color-text-2]" href="https://beian.miit.gov.cn/">冀ICP备-2023003086号-1</a>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
@media screen and (max-height: 576px) {
  .footer{
    display: none;
  }
}
</style>
