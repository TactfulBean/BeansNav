<template>
	<div id="carousel" @wheel="mouseWheel">
		<a-tabs v-model:activeKey="activeKey" size="small" style="color: #fff">
			<a-tab-pane v-for="(item, index) in menuList" :key="index" :tab="item.name">
				<div class="layout-col">
					<div v-for="item2 in item.child" class="app-group-item">
						<div>
							<a :href="item2.link">
								<a-button>
									<a-avatar
										:size="{ xs: 44, sm: 56, md: 56, lg: 56, xl: 56, xxl: 56, xxxl: 56 }"
										:src="item2.avatar"
										class="app-group-item-icon"
										shape="square"
									>
										{{ item2.name }}
									</a-avatar>
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

<script lang="ts" setup>
import { getCurrentInstance, onMounted, ref } from "vue"
const axios = getCurrentInstance().appContext.config.globalProperties.$Axios

onMounted(() => {
	getLinkList()
})

let menuList = ref()
let len = ref()

// 获取链接列表
const getLinkList = async () => {
	try {
		const response = await axios.get("https://alist.tactfulbean.top/d/%F0%9F%92%BE%E4%B8%83%E7%89%9B%E4%BA%91Kodo/LinkList.json")
		menuList.value = response.data
		len.value = response.data.length
	} catch (error) {
		console.error(error)
	}
}

let activeKey = ref(0)
//@ts-ignore
const mouseWheel = (event: any) => {
	if (event.deltaY > 0 && activeKey.value < len.value - 1) {
		activeKey.value += 1
	}
	if (event.deltaY < 0 && activeKey.value > 0) {
		activeKey.value -= 1
	}
}
</script>

<style lang="scss" scoped>
#carousel {
	@include center;
	position: absolute;
	z-index: 999;
	top: 45%;
	width: 60%;
	height: 320px;
}

//链接样式
.app-group-item {
	padding: 10px 5px;
	.ant-btn {
		min-width: 60px;
		min-height: 60px;
		padding: 0 !important;
		border-radius: 15px;
		box-shadow: $box-shadow-10;
	}
	.app-group-item-icon {
		border-radius: 14px;
	}
	&:hover {
		transition: 0.3s;
		scale: 1.05;
	}
}

//容器行列设置
.layout-col {
	display: flex;
	flex-flow: wrap;
	.app-group-item {
		display: inline-block;
		flex: 0 0 10%;
		text-align: center;
	}
}

//max-width<576px
@media screen and (max-width: 576px) {
	#carousel {
		top: 250px;
		overflow: auto;
		width: 90%;
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
		display: none;
	}
}
</style>
