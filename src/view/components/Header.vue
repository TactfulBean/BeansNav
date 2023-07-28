<template>
	<div id="header-link-box">
		<a-dropdown>
			<template #overlay>
				<a-menu id="menu">
					<a-menu-item class="menu-item">
						<a href="https://github.com/TactfulBean"><icon-font style="color: #000000" type="icon-github" /><span> Github</span></a>
					</a-menu-item>
					<a-menu-item class="menu-item">
						<a href="https://blog.tactfulbean.top/"><icon-font style="color: #008b8b" type="icon-blog" /><span> Blog</span> </a>
					</a-menu-item>
					<a-menu-item class="menu-item">
						<a href="https://alist.tactfulbean.top/"><icon-font style="color: #1685a9" type="icon-yingpan" /><span> Alist</span> </a>
					</a-menu-item>
					<a-menu-item class="menu-item">
						<a href="https://cloud.tactfulbean.top/"><icon-font style="color: #4b5cc4" type="icon-Cloud" /><span> Cloud</span> </a>
					</a-menu-item>
					<a-menu-item class="menu-item">
						<a href="https://lsky.tactfulbean.top/"><icon-font type="icon-picture-filling" /><span> Lsky</span> </a>
					</a-menu-item>
				</a-menu>
			</template>
			<a-button id="menu-btn" ghost size="small" style="margin: 0 5px"><icon-font type="icon-more" />更 多</a-button>
		</a-dropdown>
		<Setting></Setting>
		<UpDateLog></UpDateLog>
	</div>
</template>
<script lang="ts" setup>
import { createFromIconfontCN } from "@ant-design/icons-vue"
import Setting from "./Setting.vue"
import UpDateLog from "./UpDateLog.vue"
import { useSettingStore } from "../../store/Config.ts"
const settingStore = useSettingStore()

const IconFont = createFromIconfontCN({
	scriptUrl: settingStore.IconFontURL
})
</script>
<style lang="scss" scoped>
#header-link-box {
	position: absolute;
	z-index: 1000;
	top: 2px;
	right: 0;
	padding: 0.5% 1%;
}
#menu {
	@include box-border($theme-blue);
	@include box-border-radius(5px);
	background: #fff0;
	backdrop-filter: $backdrop-filter;
	.menu-item {
		span {
			color: $text-color-light;
		}
		&:hover {
			span {
				color: $text-color-dark;
			}
		}
	}
}
#menu-btn {
	@include box-border-radius(5px);
	box-shadow: $box-shadow-5;
	backdrop-filter: $backdrop-filter;
}
</style>
