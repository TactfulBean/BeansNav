<template>
	<Time></Time>
	<SearchBox></SearchBox>
	<LinkBox></LinkBox>
	<div class="app-bg-img" style="background-image: url(https://www.todaybing.com/api/today/cn?size=hd)" ref="wallPaper"></div>
	<div class="app-cover"></div>
	<Footer></Footer>
</template>
<script setup lang="ts">
import Time from "./Time.vue";
import SearchBox from "./SearchBox.vue";
import LinkBox from "./LinkBox.vue";
import Footer from "./Footer.vue";
import { ref } from "vue";

const wallPaper = ref();

const myImage = new Image();
myImage.src = "https://www.todaybing.com/api/today/cn?size=hd";
myImage.addEventListener("load", (event: any) => {
	wallPaper.value.style.backgroundImage = `url(${event.target.src})`;
	wallPaper.value.style.opacity = 1;
});
</script>
<style scoped lang="less">
.app-bg-img {
	display: block;
	height: 100%;
	width: 100%;
	object-fit: cover;
	transition: 1s;
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	opacity: 0;
}
.app-cover {
	z-index: 1;
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	background-color: rgba(0, 0, 0, 0.1);
	background-image: radial-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 100%), radial-gradient(rgba(0, 0, 0, 0) 33%, rgba(0, 0, 0, 0.2) 166%),
		linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 0% 75%, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.3) 100%);
}
</style>
