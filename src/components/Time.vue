<template>
	<div id="time-container">
		<div id="time-text">{{ time }}</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const time = ref<string>("");
const updateTime = () => {
	const date = new Date();
	const hours = date.getHours().toString().padStart(2, "0");
	const minutes = date.getMinutes().toString().padStart(2, "0");
	time.value = `${hours}:${minutes}`;
};

updateTime();
setInterval(updateTime, 1000);
</script>

<style scoped lang="less">
//时间栏
#time-container {
	position: fixed;
	z-index: 999;
	top: 115px;
	left: 50%;
	transform: translateX(-50%);
	padding: 10px;
	text-align: center;
	transition: 0.3s;
}
#time-text {
	max-width: 300px;
	color: #fff;
	font-family: -apple-system, BlinkMacSystemFont;
	font-weight: 400;
	font-size: 42px;
	white-space: nowrap;
	text-overflow: ellipsis;
	transition: 0.3s;
}
#time-text:hover {
	scale: 1.2;
	transition: 0.3s;
}
//max-width<600px
@media screen and (max-width: 576px) {
	#time-container {
		top: 38px;
	}
}
</style>
