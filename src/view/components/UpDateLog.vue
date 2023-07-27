<template>
	<a-badge :dot="isRead">
		<a-button id="menu-btn" size="small" ghost style="margin: 0 5px" @click="drawerOpen"><icon-font type="icon-gonggao" />日 志</a-button>
	</a-badge>
	<a-drawer v-model:visible="visible" maskStyle="background: rgba(0, 0, 0, 0.2)" :width="width" bodyStyle="padding:10px">
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
<script setup lang="ts">
import { createFromIconfontCN } from "@ant-design/icons-vue"
import { getCurrentInstance, onMounted, ref } from "vue"
import { useSettingStore } from "../../store/Config.ts"
const settingStore = useSettingStore()

const axios = getCurrentInstance().appContext.config.globalProperties.$Axios

const IconFont = createFromIconfontCN({
	scriptUrl: settingStore.IconFontURL
})
onMounted(() => {
	getDateLog()
})

let dateLog = ref()
let isRead = ref(false)

const getDateLog = async () => {
	try {
		const response = await axios.get("https://alist.tactfulbean.top/d/%F0%9F%92%BE%E4%B8%83%E7%89%9B%E4%BA%91Kodo/DateLog.json")
		dateLog.value = response.data
		isRead.value = settingStore.logVersion != dateLog.value[0].header
	} catch (error) {
		console.error(error)
	}
}

let activeKey = ref(1)
let visible = ref(false)
// 移动端设置页面大小
let width = ref("378")
if (settingStore.isMobile) {
	width.value = "80%"
}
let drawerOpen = () => {
	visible.value = true
	settingStore.logVersion = dateLog.value[0].header
	isRead.value = false
}
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
</style>
