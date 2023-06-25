<template>
	<a-badge :dot="isRead">
		<a-button id="menu-btn" size="small" ghost style="margin: 0 5px" @click="drawerOpen"><icon-font type="icon-gonggao" />日 志</a-button>
	</a-badge>
	<a-drawer v-model:visible="visible" maskStyle="background: rgba(0, 0, 0, 0.2)" :width="width" bodyStyle="padding:10px">
		<span>施工中......</span>
		<div id="setting-box">
			<a-collapse v-model:activeKey="activeKey" accordion>
				<a-collapse-panel v-for="(item, index) in dateLog" :key="index + 1" :header="item.header">
					<p v-for="item2 in item.tags">
						<a-tag :color="item2.color">{{ item2.info }}</a-tag
						>{{ item2.text }}
					</p>
				</a-collapse-panel>
			</a-collapse>
		</div>
	</a-drawer>
</template>
<script setup lang="ts">
import { createFromIconfontCN } from "@ant-design/icons-vue"
import Config from "../store/Config.ts"
import { getCurrentInstance, onMounted, ref } from "vue"
const ConfigStore = Config()
const LocalConfig = getCurrentInstance().appContext.config.globalProperties.$Config
const axios = getCurrentInstance().appContext.config.globalProperties.$Axios

const IconFont = createFromIconfontCN({
	scriptUrl: ConfigStore.IconFontURL
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
		isRead.value = ConfigStore.logVersion != dateLog.value[0].header
	} catch (error) {
		console.error(error)
	}
}

let activeKey = ref(1)
let visible = ref(false)
// 移动端设置页面大小
let width = ref("378")
if (ConfigStore.isMobile) {
	width.value = "80%"
}
let drawerOpen = () => {
	visible.value = true
	LocalConfig.setDateVersion(dateLog.value[0].header)
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
	background: #ececec;
	border: 1px solid #dadada;
	transition: 0.3s;
}
</style>
