<template>
	<div class="search-box" :class="{ focus: isFocus }">
		<a-input placeholder="搜索" class="search-input" @focus="isFocus = true" @blur="isFocus = false" ref="refInput"></a-input>
		<a-button shape="circle" id="search--btn-eng"> <icon-font type="icon-bing" style="color: #008b8b" /> </a-button>
		<a-button shape="circle" id="search--btn-search"> <search-outlined style="color: #1e90ff" /></a-button>
	</div>
</template>

<script setup lang="ts">
import { nextTick, ref } from "vue";
import { createFromIconfontCN, SearchOutlined } from "@ant-design/icons-vue";

nextTick(() => {
	refInput.value && refInput.value.focus();
});
// 输入框
const refInput = ref<HTMLElement | null>(null);
const isFocus = ref<boolean>(false);
const IconFont = createFromIconfontCN({
	scriptUrl: "//at.alicdn.com/t/c/font_3627162_97fzu7jybss.js"
});
</script>

<style scoped lang="less">
//搜索栏
.search-box {
	z-index: 999;
	width: 230px;
	height: 43px;
	max-width: 80%;
	position: absolute;
	top: 200px;
	left: 50%;
	transform: translateX(-50%);
	box-shadow: rgba(0, 0, 0, 0.2) 0 0 10px;
	background-color: rgba(255, 255, 255, 0.9);
	border-radius: 30px;
	overflow: hidden;
	opacity: 0.7;
	transition: 0.3s;
	.search-input {
		text-align: center;
	}
	#search--btn-eng {
		opacity: 0;
	}
	#search--btn-search {
		opacity: 0;
	}
}
.search-box:hover {
	width: 530px;
}
//获取焦点后
.focus {
	width: 530px;
	opacity: 1;
	transition: 0.3s;
	#search--btn-eng {
		opacity: 1;
	}
	#search--btn-search {
		opacity: 1;
	}
}
//输入框
.search-input {
	outline: 0;
	border: none;
	width: 100%;
	height: 100%;
	color: inherit;
	padding: 0 45px;
}
//搜索引擎选择按钮
#search--btn-eng {
	position: absolute;
	left: 5px;
	top: 5px;
}
//搜索按钮
#search--btn-search {
	position: absolute;
	right: 5px;
	top: 5px;
}
//max-width<400px
@media screen and (max-width: 400px) {
}
//max-width<600px
@media screen and (max-width: 600px) {
	.search-box {
		top: 113px;
		width: 80%;
	}
}
</style>
