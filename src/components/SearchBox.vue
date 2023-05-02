<template>
	<div class="search-box" :class="{ focus: isFocus }" @mouseover="isHover = true" @mouseleave="isHover = false">
		<a-input
			placeholder="搜索"
			class="search-input"
			v-model:value="text"
			list="languageList"
			@focus="isFocus = true"
			@blur="isHover ? (isFocus = true) : (isFocus = false)"
			@keyup="inputKey"
			ref="refInput"
		>
		</a-input>
		<a-button shape="circle" id="search--btn-eng" @click="isFocus = true"> <icon-font type="icon-bing" style="color: #008b8b" /> </a-button>
		<a-button
			shape="circle"
			id="search--btn-search"
			@click="
				search(text);
				isFocus = true;
			"
		>
			<search-outlined style="color: #1e90ff" />
		</a-button>
		<ul v-if="text && isFocus" id="languageList">
			<li v-for="item in items" class="languageList-Li" @click="search(text)">
				<search-outlined style="color: #1e90ff" />
				{{ item }}
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
import { nextTick, ref } from "vue";
import { createFromIconfontCN, SearchOutlined } from "@ant-design/icons-vue";

nextTick(() => {
	refInput.value.focus();
});
// 输入框
const refInput = ref();
let text = ref("");
let items = ref();
const isFocus = ref<boolean>(false);
const isHover = ref<boolean>(false);

const IconFont = createFromIconfontCN({
	scriptUrl: "//at.alicdn.com/t/c/font_3627162_97fzu7jybss.js"
});

let inputKey = (event: any) => {
	switch (event.keyCode) {
		case 38:
			{
				selectText(-1);
			}
			break;
		case 40:
			{
				selectText(1);
			}
			break;
		case 13:
			{
				search(text.value);
			}
			break;
		default: {
			searchText();
		}
	}
};
let select = -1;
const languageListLi = <any>document.getElementsByClassName("languageList-Li");
let selectText = (value: any) => {
	select += value;
	select = Math.max(select, 0);
	select = Math.min(select, items.value.length - 1);
	text.value = items.value[select];
	for (let i = 0; i < languageListLi.length; i++) {
		languageListLi[i].style.backgroundColor = i === select ? "#ddd" : "#ddd0";
	}
};
let searchText = () => {
	select = -1;
	let sugurl = `http://suggestion.baidu.com/su?wd=${text.value}&cb=window.baidu.sug`;
	//@ts-ignore
	window.baidu = {
		sug: function (json: any): any {
			items.value = json.s;
		}
	};
	const script = document.createElement("script");
	script.src = sugurl;
	document.head.appendChild(script);
};
let search = (value: any) => {
	text.value = value;
	if (value.trim() !== "") {
		window.location.href = `https://cn.bing.com/search?q=${value}`;
	}
};
</script>

<style scoped lang="less">
//搜索栏
.search-box {
	z-index: 1000;
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
	border-radius: 30px;
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
//搜索提示框
#languageList {
	position: absolute;
	left: 50%;
	z-index: 1000;
	margin: 0;
	padding: 15px 10px;
	width: 100%;
	max-width: 620px;
	border-radius: 30px;
	background: hsla(0, 0%, 100%, 0.9);
	box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2);
	list-style: none;
	transform: translate(-50%, 2%);
	transition: 0.3s;
}
#languageList li {
	padding: 2px 5px;
	height: 25px;
	border-radius: 5px;
	font-size: 14px;
	line-height: 25px;
	cursor: pointer;
	transition: 0.3s;
}

#languageList li:hover {
	background-color: #ddd;
	letter-spacing: 1px;
	transition: 0.3s;
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
