<template>
	<div id="header-link-box">
		<a href="https://github.com/TactfulBean" class="header-link"><icon-font type="icon-github" style="color: #000000" /> Github</a>
		<a href="https://blog.tactfulbean.top/" class="header-link"><icon-font type="icon-blog" style="color: #008b8b" /> Blog</a>
		<a href="https://alist.tactfulbean.top/" class="header-link"><icon-font type="icon-yingpan" style="color: #1685a9" /> Alist</a>
		<a href="https://cloud.tactfulbean.top/" class="header-link"><icon-font type="icon-Cloud" style="color: #44cef6" /> Cloud</a>
	</div>
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
import { createFromIconfontCN } from "@ant-design/icons-vue";

let isMobile = () => {
	return navigator.userAgent.match(
		/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
	);
};
const IconFont = createFromIconfontCN({
	scriptUrl: "//at.alicdn.com/t/c/font_3627162_9ydo67r5146.js"
});
const wallPaper = ref();

const myImage = new Image();
if (isMobile()) {
	myImage.src = "https://www.todaybing.com/api/today/cn?size=mhd";
} else {
	myImage.src = "https://www.todaybing.com/api/today/cn?size=hd";
}
myImage.addEventListener("load", (event: any) => {
	wallPaper.value.style.backgroundImage = `url(${event.target.src})`;
	wallPaper.value.style.opacity = 1;
});
</script>
<style scoped lang="less">
#header-link-box {
	position: absolute;
	top: 2px;
	right: 0;
	padding: 0 2%;
	z-index: 999;
}
.header-link {
	text-decoration: none;
	color: #fff9;
	cursor: pointer;
	padding: 0 8px;
}
.header-link:hover {
	color: #fff;
}
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
