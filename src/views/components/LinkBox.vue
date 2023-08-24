<template>
	<div id="carousel" @wheel="mouseWheel">
		<a-tabs v-model:activeKey="settingStore.linkBoxActiveKey" :animated="true" size="small" style="color: #fff">
			<a-tab-pane v-for="(item, index) in menuList" :key="index" :tab="item.name">
				<div class="layout-col">
					<div v-for="item2 in item.child" class="app-group-item">
						<div>
							<a :href="item2.link">
								<a-button>
									<a-avatar
										v-if="item2.avatar != ''"
										:size="{ xs: 44, sm: 56, md: 56, lg: 56, xl: 56, xxl: 56, xxxl: 56 }"
										:src="item2.avatar"
										class="app-group-item-icon"
										shape="square"
									>
										{{ item2.name }}
									</a-avatar>
									<a-avatar
										v-else
										:size="{ xs: 44, sm: 56, md: 56, lg: 56, xl: 56, xxl: 56, xxxl: 56 }"
										:style="{ backgroundColor: `#40a9ff` }"
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
import { getLinkBox } from "@/api"
import { useSettingStore } from "@/stores/Config.ts"
import { onMounted, ref } from "vue"

const settingStore = useSettingStore()

onMounted(() => {
	getLinkList()
})

let menuList = ref()
let len = ref()

// 获取链接列表
const getLinkList = () => {
	getLinkBox().then((res) => {
		menuList.value = res.data
		len.value = menuList.value.length
	})
}

//@ts-ignore
const mouseWheel = (event: any) => {
	if (event.deltaY > 0 && settingStore.linkBoxActiveKey < len.value - 1) {
		settingStore.linkBoxActiveKey += 1
	}
	if (event.deltaY < 0 && settingStore.linkBoxActiveKey > 0) {
		settingStore.linkBoxActiveKey -= 1
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
	.layout-col {
		display: flex;
		flex-flow: wrap;
		.app-group-item {
			display: inline-block;
			flex: 0 0 10%;
			padding: 10px 5px;
			text-align: center;
			$radius: 15px;
			.ant-btn {
				min-width: 60px;
				min-height: 60px;
				padding: 0 !important;
				@include box-border-radius($radius);
				box-shadow: $box-shadow-10;
			}
			.app-group-item-icon {
				@include box-border-radius($radius - 1px);
			}
			&:hover {
				transition: 0.3s;
				scale: 1.05;
			}
		}
	}
}

//max-width<576px
@media screen and (max-width: 576px) {
	#carousel {
		top: 250px;
		overflow: auto;
		width: 90%;
		height: calc(100% - 300px);
		.layout-col {
			.app-group-item {
				flex: 0 0 25%;
				$radius: 10px;
				.ant-btn {
					min-width: 48px;
					min-height: 48px;
					@include box-border-radius($radius);
				}
				.app-group-item-icon {
					@include box-border-radius($radius - 1px);
				}
			}
		}
	}
}
@media screen and (max-height: 576px) {
	#carousel {
		display: none;
	}
}
</style>
