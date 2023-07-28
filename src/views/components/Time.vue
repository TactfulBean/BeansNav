<template>
	<div id="time-container">
		<div id="time-text">{{ time }}</div>
	</div>
</template>

<script lang="ts" setup>
import { ref } from "vue"

const time = ref<string>("")
const updateTime = () => {
	const date = new Date()
	const hours = date.getHours().toString().padStart(2, "0")
	const minutes = date.getMinutes().toString().padStart(2, "0")
	time.value = `${hours}:${minutes}`
}

updateTime()
setInterval(updateTime, 1000)
</script>

<style lang="scss" scoped>
//时间栏
#time-container {
	@include center;
	position: fixed;
	z-index: 999;
	top: 115px;
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
}
//max-width<600px
@media screen and (max-width: 576px) {
	#time-container {
		top: 38px;
	}
}
</style>
