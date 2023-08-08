<template>
	<div id="header-link-box">
		<a-dropdown>
			<template #overlay>
				<a-menu id="menu">
					<a-menu-item v-for="item in headerMenu" class="menu-item">
						<a :href="item.href">
							<icon-font :style="{ color: item.color }" :type="item.type" />
							<span>&nbsp;{{ item.name }}</span>
						</a>
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
import Setting from "@/views/components/Setting.vue"
import UpDateLog from "@/views/components/UpdateLog.vue"
import headerMenu from "@/assets/json/headerMenu.json"

const IconFont = createFromIconfontCN({
	scriptUrl: import.meta.env.VITE_ICONFONT
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
