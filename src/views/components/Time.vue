<template>
	<div id="time-container">
		<div id="time-text">{{ hour }}<span id="time-text" class="dot">:</span>{{ min }}</div>
		<div id="ctime-text">{{ date.getMonth() + "月" + date.getDay() + "日" + " " + ChineseTime.split("星")[0] }}</div>
		<div id="ctime-text">{{ settingStore.weather.city + " " + settingStore.weather.state + " " + settingStore.weather.temp }}℃</div>
	</div>
</template>

<script lang="ts" setup>
import { getWeather } from "@/api"
import { useSettingStore } from "@/stores/Config.ts"
import { onMounted, ref } from "vue"
const settingStore = useSettingStore()

const hour = ref()
const min = ref()
const ChineseTime = ref()
const date = new Date()

const updateTime = () => {
	const date = new Date()
	hour.value = date.getHours().toString().padStart(2, "0")
	min.value = date.getMinutes().toString().padStart(2, "0")
}

const toCnDate = (date: any) => {
	return date.toLocaleString("zh-u-ca-chinese", { dateStyle: "full" })
}

ChineseTime.value = toCnDate(date).split("年")[1]
updateTime()

onMounted(() => {
	// 获取一次天气信息间隔十分钟
	if (date.getTime() - settingStore.time > 10 * 1000) {
		settingStore.time = date.getTime()
		getWeather().then((res) => {
			settingStore.weather.city = res.data.result.city.name
			settingStore.weather.temp = res.data.result.condition.temp
			settingStore.weather.state = res.data.result.condition.condition
		})
	}
})

setInterval(updateTime, 1000)
</script>

<style lang="scss" scoped>
//时间栏
#time-container {
	@include center;
	position: fixed;
	z-index: 999;
	top: 80px;
	padding: 10px;
	transition: 0.3s;
	text-align: center;
	#time-text {
		font-family: -apple-system, BlinkMacSystemFont;
		font-size: 42px;
		font-weight: 400;
		max-width: 300px;
		transition: 0.3s;
		white-space: nowrap;
		text-overflow: ellipsis;
		color: $text-color-light;
		&:hover {
			transition: 0.3s;
			scale: 1.2;
		}
	}
	#ctime-text {
		font-size: 18px;
		font-weight: 200;
		max-width: 300px;
		transition: 0.3s;
		white-space: nowrap;
		text-overflow: ellipsis;
		color: $text-color-light;
		&:hover {
			transition: 0.3s;
			scale: 1.1;
		}
	}
}
.dot {
	padding: 0 5px;
	@include animation-heart;
}
//max-width<600px
@media screen and (max-width: 576px) {
	#time-container {
		top: 38px;
	}
}
</style>
