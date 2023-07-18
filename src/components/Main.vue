<template>
	<Header> </Header>
	<Time></Time>
	<SearchBox></SearchBox>
	<LinkBox></LinkBox>
	<div class="app-bg-img" v-show="wallPaperType == 1" ref="wallPaper"></div>
	<video autoplay="true" loop="true" muted="true" v-if="wallPaperType == 2" class="app-bg-video" :src="wallPaperSrc"></video>
	<div class="app-cover"></div>
	<Footer></Footer>
</template>
<script setup lang="ts">
import Header from "./Header.vue"
import Time from "./Time.vue"
import SearchBox from "./SearchBox.vue"
import LinkBox from "./LinkBox.vue"
import Footer from "./Footer.vue"
import { getCurrentInstance, ref, watch } from "vue"
import { setWallPaperSrc, setWallPaperDate } from "../config/Config.ts"

import { useSettingStore } from "../store/Config.ts"
const settingStore = useSettingStore()

const axios = getCurrentInstance().appContext.config.globalProperties.$Axios
// 获取当前壁纸类型
const wallPaperType = ref(settingStore.wallPaperType)
// 监听设置变化
watch(
	() => settingStore.wallPaperType,
	(newValue) => {
		wallPaperType.value = newValue
	}
)
// 视频壁纸SRC
const wallPaperSrc = ref("https://alist.tactfulbean.top/d/%F0%9F%92%BE%E4%B8%83%E7%89%9B%E4%BA%91Kodo/VideoWallPaper/57.mp4")
// 图片壁纸
const wallPaper = ref()
const wallImage = new Image()
// if (ConfigStore.isMobile) {
// 	wallImage.src = "https://www.todaybing.com/api/today/cn?size=mhd";
// } else {
// 	wallImage.src = "https://www.todaybing.com/api/today/cn?size=hd";
// }

let date = settingStore.getDate
let wallPaperDate = settingStore.getWallPaperDate
if (date === wallPaperDate) {
	wallImage.src = settingStore.getWallPaperSrc
} else {
	axios.get("https://bing.biturl.top").then((res) => {
		setWallPaperSrc(res.data.url)
		setWallPaperDate(res.data.end_date)
		wallImage.src = res.data.url
	})
}

// 图片壁纸加载后进行再显示
wallImage.addEventListener("load", (event: any) => {
	wallPaper.value.style.backgroundImage = `url(${event.target.src})`
	wallPaper.value.style.opacity = 1
})
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
