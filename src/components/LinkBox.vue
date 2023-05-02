<template>
	<div id="carousel">
		<a-carousel>
			<div class="layout-col layout-row">
				<!--app-group-item-->
				<div class="app-group-item">
					<div>
						<a-button shape="circle"><icon-font type="icon-bing" style="color: #008b8b" /></a-button>
					</div>
					<span>111</span>
				</div>
				<div class="app-group-item">
					<div>
						<a-button shape="circle"><icon-font type="icon-bing" style="color: #008b8b" /></a-button>
					</div>
					<span>111</span>
				</div>
				<div class="app-group-item">
					<div>
						<a-button shape="circle"><icon-font type="icon-bing" style="color: #008b8b" /></a-button>
					</div>
					<span>111</span>
				</div>
			</div>
			<div class="layout-col layout-row">
				<!--app-group-item-->
				<div class="app-group-item">
					<div>
						<a-button shape="circle"><icon-font type="icon-bing" style="color: #008b8b" /></a-button>
					</div>
					<span>222</span>
				</div>
				<div class="app-group-item">
					<div>
						<a-button shape="circle"><icon-font type="icon-bing" style="color: #008b8b" /></a-button>
					</div>
					<span>222</span>
				</div>
			</div>
		</a-carousel>
	</div>
</template>

<script setup lang="ts">
import { createFromIconfontCN } from "@ant-design/icons-vue";

const IconFont = createFromIconfontCN({
	scriptUrl: "//at.alicdn.com/t/c/font_3627162_97fzu7jybss.js"
});
</script>

<style scoped lang="less">
#carousel {
	position: absolute;
	width: 70%;
	height: 320px;
	left: 50%;
	top: 400px;
	transform: translateX(-50%);
}

.ant-carousel :deep(.slick-slide) {
	text-align: center;
	height: 320px;
}
.app-group-item {
	display: flex;
	justify-content: center;
	flex-direction: column;
	padding: 15px;
	.ant-btn-circle {
		min-width: 64px;
		min-height: 64px;
	}
}
.layout-col {
	.app-group-item {
		margin-top: 20px;
		float: left;
	}
}
.layout-row {
	.app-group-item {
		width: calc(100% / 8);
	}
}
//max-width<400px
@media screen and (max-width: 400px) {
}
//max-width<600px
@media screen and (max-width: 600px) {
	#carousel {
		top: 323px;
		width: 80%;
	}
	.layout-row {
		.app-group-item {
			width: calc(100% / 3);
		}
	}
}
</style>
