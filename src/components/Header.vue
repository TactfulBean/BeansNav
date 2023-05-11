<template>
	<div id="header-link-box">
		<a href="https://github.com/TactfulBean" class="header-link"><icon-font class="icon" type="icon-github" style="color: #000000" /> Github</a>
		<a href="https://blog.tactfulbean.top/" class="header-link"><icon-font class="icon" type="icon-blog" style="color: #008b8b" /> Blog</a>
		<a href="https://alist.tactfulbean.top/" class="header-link"><icon-font class="icon" type="icon-yingpan" style="color: #1685a9" /> Alist</a>
		<a href="https://cloud.tactfulbean.top/" class="header-link"><icon-font class="icon" type="icon-Cloud" style="color: #44cef6" /> Cloud</a>
		<a href="https://lsky.tactfulbean.top/" class="header-link"><icon-font class="icon" type="icon-picture-filling" /> Lsky</a>
	</div>
</template>
<script setup lang="ts">
import { createFromIconfontCN } from "@ant-design/icons-vue";
import { getCurrentInstance } from "vue";

const Config = getCurrentInstance().appContext.config.globalProperties.$Config;

const IconFont = createFromIconfontCN({
	scriptUrl: Config.IconFontURL
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
	color: #fffc;
	cursor: pointer;
	padding: 0 8px;
}
.header-link:hover {
	color: #fff;
	transition: 0.3s;
}
</style>
