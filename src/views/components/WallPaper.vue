<template>
	<div v-if="settingStore.wallPaperType == 1" ref="wallPaper" class="app-bg-img"></div>
	<video v-if="settingStore.wallPaperType == 2" :src="wallPaperSrc" autoplay="true" muted="true" class="app-bg-video" loop="true"></video>
	<div class="app-cover"></div>
</template>
<script lang="ts" setup>
import { onMounted, ref, watch } from "vue"
import { getDate } from "@/utils"
import { useSettingStore } from "@/stores/Config.ts"
import { getWallPaper } from "@/api"
const settingStore = useSettingStore()

onMounted(() => {
	setWallPaper(settingStore.wallPaperType)
})

// 视频壁纸SRC
const wallPaperSrc = ref()
// 图片壁纸
const wallPaper = ref()
const wallImage = new Image()

// 监听设置变化
watch(
	() => settingStore.wallPaperType,
	(newValue) => {
		setWallPaper(newValue)
	}
)

const setWallPaper = (type: number) => {
	switch (type) {
		case 1: {
			if (getDate() === settingStore.wallPaperDate) {
				wallImage.src = settingStore.wallPaperSrc
			} else {
				getWallPaper().then((res) => {
					settingStore.wallPaperSrc = res.data.result[0].url
					settingStore.wallPaperDate = getDate()
					wallImage.src = res.data.result[0].url
				})
			}
			break
		}
		case 2: {
			wallPaperSrc.value = "https://alist.tactfulbean.top/d/%F0%9F%92%BE%E4%B8%83%E7%89%9B%E4%BA%91Kodo/VideoWallPaper/57.mp4"
			break
		}
	}
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
	position: absolute;
	z-index: 1;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.1);
	background-image: radial-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 100%), radial-gradient(rgba(0, 0, 0, 0) 33%, rgba(0, 0, 0, 0.2) 166%),
		linear-gradient(180deg, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 0.3) 100%);
}
</style>
