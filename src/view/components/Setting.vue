<template>
	<a-button ghost id="menu-btn" size="small" @click="drawerOpen"><icon-font type="icon-configure" style="color: #fff" />设 置</a-button>
	<a-drawer id="setting" v-model:visible="visible" maskStyle="background: rgba(0, 0, 0, 0.2)" :width="width" bodyStyle="padding:10px">
		<div id="setting-box">
			<div>
				<span>动态壁纸：</span>
				<a-switch v-model:checked="wallPaperType" @change="changeWallPaperType" />
			</div>
		</div>
		<template #extra>
			<div id="setting-title"><span>设置</span></div>
		</template>
	</a-drawer>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue"
import { createFromIconfontCN } from "@ant-design/icons-vue"
import { useSettingStore } from "../../store/Config.ts"
const settingStore = useSettingStore()

onMounted(() => {
	wallPaperType.value = settingStore.wallPaperType == 2
})
// 是否显示设置页面
let visible = ref(false)

let wallPaperType = ref(false)
// 壁纸类型
let changeWallPaperType = (e) => {
	settingStore.wallPaperType = e ? 2 : 1
}

// 移动端设置页面大小
let width = ref("378")
if (settingStore.isMobile) {
	width.value = "80%"
}
let drawerOpen = () => {
	visible.value = true
}
const IconFont = createFromIconfontCN({
	scriptUrl: settingStore.IconFontURL
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
	background: #ffffff;
	border: 1px solid #dadada;
	transition: 0.3s;
}
#setting-title {
	width: 150px;
	text-align: center;
	padding: 5px;
	border-radius: 10px;
	background-color: #108ee9;
	color: #ffffff;
}

//max-width<576px
@media screen and (max-width: 576px) {
}
</style>
