<template>
	<a-badge dot>
		<a-button id="menu-btn" size="small" ghost style="margin: 0 5px" @click="drawerOpen"><icon-font type="icon-gonggao" />日 志</a-button>
	</a-badge>
	<a-drawer v-model:visible="visible" maskStyle="background: rgba(0, 0, 0, 0.2)" :width="width" bodyStyle="padding:10px">
		<span>施工中......</span>
		<div id="setting-box">
			<a-collapse v-model:activeKey="activeKey" accordion>
				<a-collapse-panel key="1" header="This is panel header 1">
					<p><a-tag color="#e2041b">BugFix</a-tag>111</p>
					<p><a-tag color="#00a381">Tips</a-tag>111</p>
					<p><a-tag color="#007bbb">Enhancement</a-tag>111</p>
				</a-collapse-panel>
				<a-collapse-panel key="2" header="This is panel header 2">
					<p>222</p>
				</a-collapse-panel>
				<a-collapse-panel key="3" header="This is panel header 3">
					<p>333</p>
				</a-collapse-panel>
			</a-collapse>
		</div>
	</a-drawer>
</template>
<script setup lang="ts">
import { createFromIconfontCN } from "@ant-design/icons-vue"
import Config from "../store/Config.ts"
import { ref } from "vue"
const ConfigStore = Config()

const IconFont = createFromIconfontCN({
	scriptUrl: ConfigStore.IconFontURL
})

let activeKey = ref(1)
let visible = ref(false)
// 移动端设置页面大小
let width = ref("378")
if (ConfigStore.isMobile) {
	width.value = "80%"
}
let drawerOpen = () => {
	visible.value = true
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
