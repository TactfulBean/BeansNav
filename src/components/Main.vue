<template>
	<div id="time-container">
		<div id="time-text">{{ time }}</div>
	</div>
	<div class="search-box" :class="{ focus: isFocus }">
		<a-input placeholder="搜索" class="search-input" @focus="isFocus = true" @blur="isFocus = false" ref="refInput"></a-input>
		<a-button shape="circle" id="search--btn-eng"> <icon-font type="icon-bing" style="color: #008b8b" /> </a-button>
		<a-button shape="circle" id="search--btn-search"> <search-outlined style="color: #1e90ff" /></a-button>
	</div>
</template>
<script setup lang="ts">
import { createFromIconfontCN, SearchOutlined } from "@ant-design/icons-vue";
import { nextTick, onMounted, ref } from "vue";
nextTick(() => {
	refInput.value && refInput.value.focus();
});
const IconFont = createFromIconfontCN({
	scriptUrl: "//at.alicdn.com/t/c/font_3627162_97fzu7jybss.js"
});
const time = ref<string>("");
const isFocus = ref<boolean>(false);
// 输入框
const refInput = ref<HTMLElement | null>(null);

const updateTime = () => {
	const date = new Date();
	const hours = date.getHours().toString().padStart(2, "0");
	const minutes = date.getMinutes().toString().padStart(2, "0");
	time.value = `${hours}:${minutes}`;
};

updateTime();
setInterval(updateTime, 1000);
</script>
<style scoped lang="less">
//时间栏
#time-container {
	position: fixed;
	top: 115px;
	left: 50%;
	transform: translateX(-50%);
	padding: 10px;
	text-align: center;
	transition: 0.3s;
}
#time-text {
	max-width: 300px;
	color: #fff;
	font-family: -apple-system, BlinkMacSystemFont;
	font-weight: 400;
	font-size: 42px;
	white-space: nowrap;
	text-overflow: ellipsis;
	transition: 0.3s;
}
#time-text:hover {
	scale: 1.2;
	transition: 0.3s;
}
//搜索栏
.search-box {
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
	#time-container {
		top: 38px;
	}
	.search-box {
		top: 113px;
		width: 80%;
	}
}
</style>
