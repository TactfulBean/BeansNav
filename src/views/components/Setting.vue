<template>
	<a-button id="menu-btn" ghost size="small" @click="drawerOpen"><icon-font type="icon-configure" />设 置</a-button>
	<a-drawer id="setting" v-model:visible="visible" :width="width" bodyStyle="padding:10px" maskStyle="background: rgba(0, 0, 0, 0.2)">
		<div id="setting-box">
			<div>
				<span>动态壁纸：</span>
				<a-switch :checked="settingStore.wallPaperType == 2" @change="changeWallPaperType" />
			</div>
		</div>
		<template #extra>
			<div id="setting-title"><span>设置</span></div>
		</template>
	</a-drawer>
</template>
<script lang="ts" setup>
import { ref } from "vue"
import { createFromIconfontCN } from "@ant-design/icons-vue"
import { useSettingStore } from "@/stores/Config.ts"
const settingStore = useSettingStore()

// 是否显示设置页面
let visible = ref(false)

// 壁纸类型
let changeWallPaperType = (e: number) => {
	settingStore.wallPaperType = e ? 2 : 1
}

// 移动端设置页面大小
let width = ref("378")
if (window.innerWidth < 576) {
	width.value = "80%"
}
let drawerOpen = () => {
	visible.value = true
}
const IconFont = createFromIconfontCN({
	scriptUrl: import.meta.env.VITE_ICONFONT
})
</script>
<style lang="scss" scoped>
#menu-btn {
	@include box-border-radius(5px);
	box-shadow: $box-shadow-5;
	backdrop-filter: blur(10px) saturate(1.5);
}

#setting-box {
	@include box-border-radius(15px);
	margin: 10px 0;
	padding: 10px;
	transition: 0.3s;
	border: 1px solid #dadada;
	background: $text-color-light;
}
#setting-title {
	@include box-border-radius(10px);
	width: 150px;
	padding: 5px;
	text-align: center;
	color: $text-color-light;
	background-color: $theme-blue;
}
</style>
