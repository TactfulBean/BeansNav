<template>
	<a-button ghost id="menu-btn" size="small" @click="drawerOpen"><icon-font type="icon-configure" style="color: #fff" />设 置</a-button>
	<a-drawer id="setting" v-model:visible="visible" maskStyle="background: rgba(0, 0, 0, 0.2)" :width="width" bodyStyle="padding:10px">
		<div id="setting-box" style="background-color: #ffffff; text-align: center"><span>设置</span></div>
		<div id="setting-box">
			<div><span>动态壁纸：</span> <a-switch v-model:checked="wallPaperType" @change="changeWallPaperType" /></div>
		</div>
	</a-drawer>
</template>
<script setup lang="ts">
import { getCurrentInstance, onMounted, ref } from "vue"
import { createFromIconfontCN } from "@ant-design/icons-vue"
import Config from "../store/Config.ts"
onMounted(() => {
	if (ConfigStore.wallPaperType == 1) {
		wallPaperType.value = false
	}
	if (ConfigStore.wallPaperType == 2) {
		wallPaperType.value = true
	}
})
const LocalConfig = getCurrentInstance().appContext.config.globalProperties.$Config
const ConfigStore = Config()
// 是否显示设置页面
let visible = ref(false)

let wallPaperType = ref()
// 壁纸类型
let changeWallPaperType = (e) => {
	console.log(e)
	if (e) {
		ConfigStore.$patch({
			wallPaperType: 2
		})
		LocalConfig.setWallPaperType(2)
	} else {
		ConfigStore.$patch({
			wallPaperType: 1
		})
		LocalConfig.setWallPaperType(1)
	}
}
// 移动端设置页面大小
let width = ref("378")
if (ConfigStore.isMobile) {
	width.value = "80%"
}
let drawerOpen = () => {
	visible.value = true
}
const IconFont = createFromIconfontCN({
	scriptUrl: ConfigStore.IconFontURL
})
</script>
<style scoped lang="less">
#menu-btn {
	border-radius: 5px;
	box-shadow: rgba(0, 0, 0, 0.2) 0 0 5px;
	backdrop-filter: blur(10px) saturate(1.5);
}

#setting-box {
	border-radius: 15px;
	padding: 10px;
	margin: 10px 0;
	background: #f3f3f3;
	border: 1px solid #dadada;
	transition: 0.3s;
}
#setting-box:hover {
	border: 1px solid #40a9ff;
	transition: 0.3s;
}
//max-width<576px
@media screen and (max-width: 576px) {
}
</style>
