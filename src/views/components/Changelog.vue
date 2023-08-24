<template>
	<a-badge :dot="isRead">
		<a-button id="menu-btn" ghost size="small" style="margin: 0 5px" @click="drawerOpen"><icon-font type="icon-gonggao" />日 志</a-button>
	</a-badge>
	<a-drawer v-model:visible="visible" :width="width" bodyStyle="padding:10px" maskStyle="background: rgba(0, 0, 0, 0.2)">
		<div id="setting-box">
			<a-collapse v-model:activeKey="activeKey" accordion>
				<a-collapse-panel v-for="(item, index) in dateLog" :key="index + 1" :header="item.header">
					<p v-for="item2 in item.tags">
						<a-tag :color="item2.color">{{ item2.info }}</a-tag>
						{{ item2.text }}
					</p>
					<template #extra>
						<a-tag :color="item.color">{{ item.info }}</a-tag>
					</template>
				</a-collapse-panel>
			</a-collapse>
		</div>
		<template #extra>
			<div id="setting-title"><span>更新日志</span></div>
		</template>
	</a-drawer>
</template>
<script lang="ts" setup>
import { Changelog } from "@/type/Changelog"
import { createFromIconfontCN } from "@ant-design/icons-vue"
import { onMounted, Ref, ref } from "vue"
import { useSettingStore } from "@/stores/Config.ts"
import { getChangelog } from "@/api"
const settingStore = useSettingStore()

const IconFont = createFromIconfontCN({
	scriptUrl: import.meta.env.VITE_ICONFONT
})
onMounted(() => {
	getLog()
})

let dateLog: Ref<Changelog[]> = ref()
let isRead = ref(false)

const getLog = () => {
	getChangelog().then((res) => {
		dateLog.value = res.data
		isRead.value = settingStore.logVersion != dateLog.value[0].header
	})
}

let activeKey = ref(1)
let visible = ref(false)
// 移动端设置页面大小  <576
let width = ref("378")
if (window.innerWidth < 576) {
	width.value = "80%"
}
let drawerOpen = () => {
	visible.value = true
	settingStore.logVersion = dateLog.value[0].header
	isRead.value = false
}
</script>
<style lang="scss" scoped>
#menu-btn {
	@include box-border-radius(5px);
	box-shadow: $box-shadow-5;
	backdrop-filter: blur(10px) saturate(1.5);
}
#setting-box {
	@include box-border(#dadada);
	@include box-border-radius(15px);
	margin: 10px 0;
	padding: 10px;
	transition: 0.3s;
	background: #ffffff;
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
