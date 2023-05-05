<template>
	<div id="carousel" @wheel="mouseWheel">
		<a-tabs style="color: #fff" size="small" v-model:activeKey="activeKey">
			<a-tab-pane v-for="(item, index) in menuList" :key="index" :tab="item.name" class="link-tab">
				<div class="layout-col">
					<div class="app-group-item" v-for="item2 in item.child">
						<div>
							<a :href="item2.link">
								<a-button>
									<a-avatar
										class="app-group-item-icon"
										shape="square"
										:src="item2.avatar"
										:size="{ xs: 44, sm: 60, md: 60, ld: 60, xl: 60, xxl: 60, xxxl: 60 }"
										>{{ item2.name }}</a-avatar
									>
								</a-button>
							</a>
						</div>
						<span style="width: 70px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; display: inline-block; color: #fff">{{
							item2.name
						}}</span>
					</div>
				</div>
			</a-tab-pane>
		</a-tabs>
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { menuList } from "../assets/json/LinkList.ts";
let len = menuList.length;
let activeKey = ref(0);
//@ts-ignore
const mouseWheel = (event: any) => {
	if (event.deltaY > 0 && activeKey.value < len - 1) {
		activeKey.value += 1;
	}
	if (event.deltaY < 0 && activeKey.value > 0) {
		activeKey.value -= 1;
	}
};
</script>

<style scoped lang="less">
#carousel {
	position: absolute;
	z-index: 999;
	top: 425px;
	left: 50%;
	width: 60%;
	height: 320px;
	transform: translateX(-50%);
}

//链接样式
.app-group-item {
	padding: 10px 5px;
	.ant-btn {
		padding: 0 !important;
		min-width: 64px;
		min-height: 64px;
		border-radius: 15px;
		box-shadow: rgba(0, 0, 0, 0.2) 0 0 10px;
	}
	.app-group-item-icon {
		border-radius: 14px;
	}
	:hover {
		scale: 1.05;
		transition: 0.3s;
	}
}

//容器行列设置
.layout-col {
	display: flex;
	flex-flow: wrap;
	.app-group-item {
		flex: 0 0 12.5%;
		text-align: center;
		display: inline-block;
	}
}

//max-width<576px
@media screen and (max-width: 576px) {
	#carousel {
		top: 250px;
		width: 90%;
	}
	.link-tab {
		overflow: auto;
	}
	.layout-col {
		.app-group-item {
			flex: 0 0 25%;
		}
	}
	.app-group-item {
		.ant-btn {
			min-width: 48px;
			min-height: 48px;
			border-radius: 10px;
		}
		.app-group-item-icon {
			border-radius: 9px;
		}
	}
}
@media screen and (max-height: 576px) {
	#carousel {
		animation: hide 0.5s;
		opacity: 0;
	}
}
</style>
