<template>
	<div id="time-container">
		<div id="time-text">{{ hour }}<span id="time-text" class="dot">:</span>{{ min }}</div>
		<div id="ctime-text">{{ ChineseTime }}</div>
	</div>
</template>

<script lang="ts" setup>
import { ref } from "vue"

let hour = ref()
let min = ref()
const ChineseTime = ref()
const updateTime = () => {
	const date = new Date()
	hour.value = date.getHours().toString().padStart(2, "0")
	min.value = date.getMinutes().toString().padStart(2, "0")
}

const toCnDate = (date: any) => date.toLocaleString("zh-u-ca-chinese", { dateStyle: "full" }) + " " + date.toLocaleTimeString(0, { hour12: false })
ChineseTime.value = toCnDate(new Date()).split("年")[1].split(" ")[0]

updateTime()
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
