<template>
	<div id="header-link-box">
		<a-dropdown>
			<template #overlay>
				<a-menu id="menu">
					<a-menu-item class="menu-item">
						<a href="https://github.com/TactfulBean"><icon-font type="icon-github" style="color: #000000" /><span> Github</span></a>
					</a-menu-item>
					<a-menu-item class="menu-item">
						<a href="https://blog.tactfulbean.top/"><icon-font type="icon-blog" style="color: #008b8b" /><span> Blog</span> </a>
					</a-menu-item>
					<a-menu-item class="menu-item">
						<a href="https://alist.tactfulbean.top/"><icon-font type="icon-yingpan" style="color: #1685a9" /><span> Alist</span> </a>
					</a-menu-item>
					<a-menu-item class="menu-item">
						<a href="https://cloud.tactfulbean.top/"><icon-font type="icon-Cloud" style="color: #4b5cc4" /><span> Cloud</span> </a>
					</a-menu-item>
					<a-menu-item class="menu-item">
						<a href="https://lsky.tactfulbean.top/"><icon-font type="icon-picture-filling" /><span> Lsky</span> </a>
					</a-menu-item>
				</a-menu>
			</template>
			<a-button ghost id="menu-btn" size="small" style="margin: 0 5px"><icon-font type="icon-more" />更 多</a-button>
		</a-dropdown>
		<Setting></Setting>
		<UpDateLog></UpDateLog>
	</div>
</template>
<script setup lang="ts">
import { createFromIconfontCN } from "@ant-design/icons-vue"
import Setting from "./Setting.vue"
import UpDateLog from "./upDateLog.vue"
import Config from "../store/Config.ts"
const ConfigStore = Config()

const IconFont = createFromIconfontCN({
	scriptUrl: ConfigStore.IconFontURL
})
</script>
<style scoped lang="less">
#header-link-box {
	position: absolute;
	top: 2px;
	right: 0;
	padding: 0.5% 1%;
	z-index: 1000;
}
#menu {
	border-radius: 5px;
	border: 1px solid #40a9ff;
	background: #fff0;
	backdrop-filter: blur(10px) saturate(1.5);
}
#menu-btn {
	border-radius: 5px;
	box-shadow: rgba(0, 0, 0, 0.2) 0 0 5px;
	backdrop-filter: blur(10px) saturate(1.5);
}
.menu-item {
	span {
		color: #fff;
	}
}
.menu-item:hover {
	span {
		color: #000;
	}
}
</style>
