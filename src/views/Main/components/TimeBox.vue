<template>
  <div class="flex-center flex-col w-full duration-300 gap-10">
    <div class="timeText text-42 text-white">{{ hour }}<span class="timeText dot px-5">:</span>{{ min }}</div>
    <div class="text-18 text-white">
      {{ date.getMonth() + 1 + "月" + date.getDate() + "日" + " " + ChineseTime?.split("星")[0] }}
    </div>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref } from "vue"

const hour = ref()
const min = ref()
const ChineseTime = ref()
const date = new Date()

const updateTime = () => {
  const date = new Date()
  hour.value = date.getHours().toString().padStart(2, "0")
  min.value = date.getMinutes().toString().padStart(2, "0")
}

const toCnDate = (date: Date) => {
  return date.toLocaleString("zh-u-ca-chinese", { dateStyle: "full" })
}

onMounted(() => {
  ChineseTime.value = toCnDate(date).split("年")[1]
  updateTime()
  setInterval(updateTime, 1000)
})
</script>
<style lang="scss" scoped>
.timeText {
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
}
.dot {
  animation: heart 0.5s ease-in-out infinite alternate;
}
</style>
