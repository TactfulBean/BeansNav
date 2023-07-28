<template>
	<div v-show="wallPaperType == 1" ref="wallPaper" class="app-bg-img"></div>
	<video v-if="wallPaperType == 2" :src="wallPaperSrc" autoplay="true" class="app-bg-video" loop="true"></video>
	<div class="app-cover"></div>
</template>
<script lang="ts" setup>
import { getCurrentInstance, ref, watch } from "vue"

import { useSettingStore } from "../../store/Config.ts"
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
const wallImage: any = new Image()
// if (ConfigStore.isMobile) {
// 	wallImage.src = "https://www.todaybing.com/api/today/cn?size=mhd";
// } else {
// 	wallImage.src = "https://www.todaybing.com/api/today/cn?size=hd";
// }

let getDate = () => {
	const date = new Date()
	const year = date.getFullYear().toString()
	const month = (date.getMonth() + 1).toString().padStart(2, "0")
	const day = date.getDate().toString()
	return year + month + day
}

if (getDate() === settingStore.wallPaperDate) {
	wallImage.src = settingStore.wallPaperSrc
} else {
	axios.get("https://bing.biturl.top").then((res) => {
		settingStore.wallPaperSrc = res.data.url
		settingStore.wallPaperDate = res.data.end_date
		wallImage.src = res.data.url
	})
}

// 图片壁纸加载后进行再显示
wallImage.addEventListener("load", (event: any) => {
	wallPaper.value.style.backgroundImage = `url(${event.target.src})`
	wallPaper.value.style.opacity = 1
})
</script>
<style lang="scss" scoped>
.app-bg-img {
	@include full;
	display: block;
	transition: 1s;
	opacity: 0;
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	object-fit: cover;
}
.app-bg-video {
	@include full;
	object-fit: cover;
}
.app-cover {
	@include full;
	position: absolute;
	z-index: 1;
	background-color: rgba(0, 0, 0, 0.1);
	background-image: radial-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 100%), radial-gradient(rgba(0, 0, 0, 0) 33%, rgba(0, 0, 0, 0.2) 166%),
		linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 0% 75%, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.3) 100%);
}
</style>
