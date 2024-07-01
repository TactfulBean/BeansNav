<template>
  <!--  <div class="absolute flex-col bottom-40 right-20 z-50">-->
  <!--    <div class="b-button wh-30 text-20 rounded-20" @click="change($event)">-->
  <!--      <div class="i-carbon:sun dark:i-carbon:moon hover:rotate-360 duration-1000"></div>-->
  <!--    </div>-->
  <!--  </div>-->
</template>
<script lang="ts" setup>
import { useMainStore } from "@/stores/MainStore.ts"
import { onMounted } from "vue"

const mainStore = useMainStore()

onMounted(() => {
  document.getElementsByTagName("Html")[0].className = mainStore.darkTheme ? "dark" : "light"
  mainStore.darkTheme ? document.body.setAttribute("arco-theme", "dark") : document.body.removeAttribute("arco-theme")
})

// const change = (event: any) => {
//   mainStore.darkTheme = !mainStore.darkTheme
//   mainStore.darkTheme ? document.body.setAttribute("arco-theme", "dark") : document.body.removeAttribute("arco-theme")
//
//   const x = event.clientX
//   const y = event.clientY
//   const endRadius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y))
//   let isDark: boolean
//
//   // @ts-ignore
//   const transition = document.startViewTransition(() => {
//     const root = document.documentElement
//     isDark = root.classList.contains("dark")
//     root.classList.remove(isDark ? "dark" : "light")
//     root.classList.add(isDark ? "light" : "dark")
//   })
//   transition.ready.then(() => {
//     const clipPath = [`circle(0px at ${x}px ${y}px)`, `circle(${endRadius}px at ${x}px ${y}px)`]
//     document.documentElement.animate(
//       {
//         clipPath: isDark ? clipPath.reverse() : clipPath
//       },
//       {
//         duration: 500,
//         easing: "ease-in",
//         pseudoElement: isDark ? "::view-transition-old(root)" : "::view-transition-new(root)"
//       }
//     )
//   })
// }
</script>
<style lang="scss" scoped></style>
