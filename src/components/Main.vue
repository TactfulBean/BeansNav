<template>
	<Header> </Header>
	<Time></Time>
	<SearchBox></SearchBox>
	<LinkBox></LinkBox>
	<div class="app-bg-img" v-if="wallPaperType == 1" ref="wallPaper"></div>
	<video autoplay="true" loop="true" muted="true" v-if="wallPaperType == 2" class="app-bg-video" :src="wallPaperSrc"></video>
	<div class="app-cover"></div>
	<Footer></Footer>
</template>
<script setup lang="ts">
import Header from "./Header.vue";
import Time from "./Time.vue";
import SearchBox from "./SearchBox.vue";
import LinkBox from "./LinkBox.vue";
import Footer from "./Footer.vue";
import { ref, watch } from "vue";
import Config from "../store/Config.ts";
const ConfigStore = Config();

// 获取当前壁纸类型
const wallPaperType = ref(ConfigStore.wallPaperType);
// 监听设置变化
watch(
	() => ConfigStore.wallPaperType,
	(newValue) => {
		wallPaperType.value = newValue;
	}
);
// 视频壁纸SRC
const wallPaperSrc = ref("https://alist.tactfulbean.top/d/%F0%9F%92%BE%E4%B8%83%E7%89%9B%E4%BA%91Kodo/57.mp4");
// 图片壁纸
const wallPaper = ref();
const myImage = new Image();
if (ConfigStore.isMobile) {
	myImage.src = "https://www.todaybing.com/api/today/cn?size=mhd";
} else {
	myImage.src = "https://www.todaybing.com/api/today/cn?size=hd";
}
// 图片壁纸加载后进行再显示
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
.app-bg-video {
	height: 100%;
	width: 100%;
	object-fit: cover;
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
