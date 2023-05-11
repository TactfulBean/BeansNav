<template>
	<div id="carousel" @wheel="mouseWheel">
		<a-tabs style="color: #fff" size="small" v-model:activeKey="activeKey">
			<a-tab-pane v-for="(item, index) in menuList" :key="index" :tab="item.name">
				<div class="layout-col">
					<div class="app-group-item" v-for="item2 in item.child">
						<div>
							<a :href="item2.link">
								<a-button>
									<a-avatar
										class="app-group-item-icon"
										shape="square"
										:src="item2.avatar"
										:size="{ xs: 44, sm: 56, md: 56, ld: 56, xl: 56, xxl: 56, xxxl: 56 }"
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
import { getCurrentInstance, onMounted, ref } from "vue";
const axios = getCurrentInstance().appContext.config.globalProperties.$Axios;

onMounted(() => {
	getLinkList();
});

let menuList = ref();
let len = ref();

// 获取链接列表
const getLinkList = async () => {
	try {
		const response = await axios.get("https://alist.tactfulbean.top/d/%F0%9F%92%BE%E4%B8%83%E7%89%9B%E4%BA%91Kodo/LinkList.json");
		menuList.value = response.data;
		len.value = response.data.length;
	} catch (error) {
		console.error(error);
	}
};

let activeKey = ref(0);
//@ts-ignore
const mouseWheel = (event: any) => {
	if (event.deltaY > 0 && activeKey.value < len.value - 1) {
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
		min-width: 60px;
		min-height: 60px;
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
		flex: 0 0 10%;
		text-align: center;
		display: inline-block;
	}
}

//max-width<576px
@media screen and (max-width: 576px) {
	#carousel {
		top: 250px;
		width: 90%;
		overflow: auto;
		height: calc(100% - 300px);
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
		animation: hide 0.3s;
		opacity: 0;
	}
}
</style>
