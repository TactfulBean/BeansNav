<template>
  <div class="right-10 top-5 flex w-auto h-auto absolute z-50">
    <a-popover position="br">
      <div class="b-button w-80 h-28 rounded-xl">
        <div class="i-carbon:list"></div>
        &nbsp;更&nbsp;多
      </div>
      <template #content>
        <div class="w-200 h-auto">
          <div class="m-10">访问更多站点</div>
          <div class="grid grid-cols-2 grid-rows-2 gap-10">
            <a-button href="https://github.com/TactfulBean"><span class="mx-5 i-mdi:home"></span>Home</a-button>
            <a-button href="https://alist.tactfulbean.top/"><span class="mx-5 i-mdi:cloud"></span>Alist</a-button>
            <a-button href="https://blog.tactfulbean.top/"><span class="mx-5 i-mdi:blogger"></span>Blog</a-button>
            <a-button href="https://lsky.tactfulbean.top/"><span class="mx-5 i-mdi:file-image-box"></span>Lsky</a-button>
          </div>
        </div>
      </template>
    </a-popover>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped></style>
