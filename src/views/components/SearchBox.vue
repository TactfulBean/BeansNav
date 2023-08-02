<template>
	<div :class="{ focus: isFocus }" class="search-box" @mouseleave="isHover = false" @mouseover="isHover = true">
		<a-input
			ref="refInput"
			v-model:value="text"
			:placeholder="searchList[settingStore.searchEngine - 1].title"
			class="search-input"
			list="languageList"
			@blur="isHover ? (isFocus = true) : (isFocus = false)"
			@focus="isFocus = true"
			@keyup="inputKey"
		>
		</a-input>
		<a-dropdown>
			<template #overlay>
				<a-menu @click="searchSelect" @mouseleave="isHover = false" @mouseover="isHover = true">
					<a-menu-item v-for="item in searchList" :key="item.key">
						<icon-font :style="{ color: item.color }" :type="item.type"></icon-font> {{ item.title }}
					</a-menu-item>
				</a-menu>
			</template>
			<a-button id="search--btn-eng" shape="circle">
				<icon-font :style="{ color: searchList[settingStore.searchEngine - 1].color }" :type="searchList[settingStore.searchEngine - 1].type" />
			</a-button>
		</a-dropdown>

		<a-button id="search--btn-search" shape="circle" @click="search(text)">
			<search-outlined style="color: #1e90ff" />
		</a-button>
		<ul v-if="isFocus" id="languageList" ref="searchSuggestionBox" :style="{ height: listHeight }">
			<li class="languageList-Li" style="padding: 0 20px"><icon-font :type="searchList[1].type"></icon-font> <b>以下结果来自百度搜索建议</b></li>
			<li v-for="item in items" class="languageList-Li" @click="search(item)">
				<search-outlined style="color: #1e90ff" />
				{{ item }}
			</li>
		</ul>
	</div>
</template>

<script lang="ts" setup>
import { nextTick, ref } from "vue"
import { createFromIconfontCN, SearchOutlined } from "@ant-design/icons-vue"
import { useSettingStore } from "@/stores/Config.ts"
import searchList from "@/assets/json/searchEngine.json"
import { getSearchSuggestions } from "@/api"
const settingStore = useSettingStore()

nextTick(() => {
	refInput.value.focus()
})

// 输入框
const refInput = ref()
let text = ref("")
let items = ref()
const isFocus = ref<boolean>(false)
const isHover = ref<boolean>(false)

const IconFont = createFromIconfontCN({
	scriptUrl: import.meta.env.VITE_ICONFONT
})
document.getElementById("app-body").addEventListener("keyup", () => {
	refInput.value.focus()
})
// 判断按键类型
let inputKey = (event: any) => {
	switch (event.keyCode) {
		case 38:
			{
				selectText(-1)
			}
			break
		case 40:
			{
				selectText(1)
			}
			break
		case 13:
			{
				search(text.value)
			}
			break
		default: {
			searchText()
		}
	}
}
// 提示列表所选序号 初始值为0
const select: any = ref(0)
// 搜索提示列表
const searchSuggestionBox = ref()
// 提示列表选择键盘事件
const selectText = (value: any) => {
	const searchSuggestions = searchSuggestionBox.value.querySelectorAll(".languageList-Li")
	searchSuggestions.forEach((item) => item.classList.toggle("focus", false))
	select.value += value
	// 限制所选序号数值大小
	select.value = Math.max(select.value, 1)
	select.value = Math.min(select.value, items.value.length)
	text.value = items.value[select - 1]
	searchSuggestions[select].classList.toggle("focus", true)
}
// 生成的提示列表高度
let listHeight = <any>ref(0)
// 搜索提示
let searchText = () => {
	if (!text.value) listHeight.value = 0
	select.value = -1
	getSearchSuggestions(text.value).then((res: any) => {
		items.value = res
		listHeight.value = items.value.length * 26 + 26 + "px"
	})
}

// 查找对应KEY的对象
let searchSelect = (e) => {
	settingStore.searchEngine = e.key
}
// 搜索事件
let search = (value: any) => {
	text.value = value
	if (value.trim() !== "") {
		window.location.href = searchList[settingStore.searchEngine - 1].href + value
	}
}
</script>

<style lang="scss" scoped>
//搜索栏
.search-box {
	@include center;
	@include box-border-radius(30px);
	position: absolute;
	z-index: 1000;
	top: 200px;
	width: 230px;
	max-width: 80%;
	height: 43px;
	transition: 0.3s;
	background-color: rgba(255, 255, 255, 0.25);
	box-shadow: $box-shadow-10;
	backdrop-filter: $backdrop-filter;
	.search-input {
		text-align: center;
		color: $text-color-light;
		background-color: transparent;
	}
	#search--btn-eng,
	#search--btn-search {
		opacity: 0;
	}
	&:hover {
		width: 530px;
	}
}
//获取焦点后
.focus {
	width: 530px;
	transition: 0.3s;
	opacity: 1;
	background-color: rgba(255, 255, 255, 0.8);
	.search-input {
		color: $text-color-dark;
		&::placeholder {
			color: #0009;
		}
	}
	#search--btn-eng,
	#search--btn-search {
		opacity: 1;
	}
}
//输入框
.search-input {
	@include full;
	padding: 0 45px;
	color: inherit;
	border: none;
	border-radius: 30px;
	outline: 0;
	&::placeholder {
		color: #fffd;
	}
}

%search--btn {
	position: absolute;
	top: 5px;
}
//搜索引擎选择按钮
#search--btn-eng {
	@extend %search--btn;
	left: 5px;
}
//搜索按钮
#search--btn-search {
	@extend %search--btn;
	right: 5px;
}
//搜索提示框
#languageList {
	@include center;
	position: absolute;
	z-index: 1000;
	overflow: hidden;
	width: 100%;
	max-width: 620px;
	height: 0;
	margin: 5px 0 0 0;
	padding: 0;
	list-style: none;
	transition: 0.15s;
	border-radius: 15px;
	background: hsla(0, 0%, 100%, 0.8);
	box-shadow: $box-shadow-5;
	.languageList-Li {
		@include box-border-radius(5px);
		font-size: 14px;
		line-height: 25px;
		height: 26px;
		padding: 0 15px;
		cursor: pointer;
		transition: 0.3s;
		&.focus,
		&:hover {
			padding: 0 20px;
			transition: 0.3s;
			letter-spacing: 1px;
			background-color: #afafaf;
		}
	}
}
//max-width<576px
@media screen and (max-width: 576px) {
	.search-box {
		top: 113px;
		width: 80%;
	}
}
</style>
