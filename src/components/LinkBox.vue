<template>
	<div id="carousel" @wheel="mouseWheel">
		<a-carousel ref="linkCarousel">
			<div class="layout-col layout-row" v-for="item in menuList">
				<span style="width: 100%; color: #fff; display: block">{{ item.name }}</span>
				<div class="app-group-item" v-for="item2 in item.child">
					<div>
						<a :href="item2.link">
							<a-button>
								<a-avatar class="app-group-item-icon" shape="square" :src="item2.avatar">{{ item2.name }}</a-avatar>
							</a-button>
						</a>
					</div>
					<span style="width: 70px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; display: inline-block; color: #fff">{{
						item2.name
					}}</span>
				</div>
			</div>
		</a-carousel>
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { menuList } from "../assets/json/LinkList.ts";

let linkCarousel = ref();

const mouseWheel = (event: any) => {
	if (event.deltaY > 0) {
		linkCarousel.value.next();
	} else {
		linkCarousel.value.prev();
	}
};
</script>

<style scoped lang="less">
#carousel {
	position: absolute;
	z-index: 999;
	top: 400px;
	left: 50%;
	width: 70%;
	height: 320px;
	transform: translateX(-50%);
}

.ant-carousel :deep(.slick-slide) {
	height: 320px;
}

.app-group-item {
	padding: 10px 5px;

	.ant-btn {
		padding: 0 !important;
		min-width: 64px;
		min-height: 64px;
		border-radius: 15px;
	}
	.app-group-item-icon {
		min-width: 48px;
		min-height: 48px;
		border-radius: 10px;
	}
}

.layout-col {
	.app-group-item {
		text-align: center;
		display: inline-block;
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
		width: 90%;
	}

	.layout-row {
		.app-group-item {
			width: calc(100% / 4);
		}
	}

	.app-group-item {
		.ant-btn {
			min-width: 48px;
			min-height: 48px;
			border-radius: 10px;
		}
		.app-group-item-icon {
			min-width: 32px;
			min-height: 32px;
			border-radius: 8px;
		}
	}
}
</style>
