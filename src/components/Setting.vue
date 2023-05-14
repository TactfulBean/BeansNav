<template>
	<a-button ghost id="menu-btn" size="small" @click="drawerOpen"><icon-font type="icon-configure" style="color: #fff" />设 置</a-button>
	<a-drawer id="setting" v-model:visible="visible" maskStyle="background: rgba(0, 0, 0, 0.2)" :width="width">
		施工中......
		<a-switch />
	</a-drawer>
</template>
<script setup lang="ts">
import { getCurrentInstance, ref } from "vue";
import { createFromIconfontCN } from "@ant-design/icons-vue";
const Config = getCurrentInstance().appContext.config.globalProperties.$Config;

let visible = ref(false);

let width = ref("378");

if (Config.isMobile()) {
	width.value = "80%";
}
let drawerOpen = () => {
	visible.value = true;
};

const IconFont = createFromIconfontCN({
	scriptUrl: Config.IconFontURL
});
</script>
<style scoped lang="less">
#menu-btn {
	border-radius: 5px;
	box-shadow: rgba(0, 0, 0, 0.2) 0 0 5px;
	backdrop-filter: blur(10px) saturate(1.5);
}

//max-width<576px
@media screen and (max-width: 576px) {
}
</style>
