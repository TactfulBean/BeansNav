<template>
	<ul id="languageList" :style="{ height: listHeight }">
		<li class="languageList-Li" style="padding: 0 20px"><icon-font :type="searchList[1].type"></icon-font> <b>以下结果来自百度搜索建议</b></li>
		<li v-for="item in items" class="languageList-Li" @click="emits('search', item)">
			<search-outlined style="color: #1e90ff" />
			{{ item }}
		</li>
	</ul>
</template>
<script lang="ts" setup>
import { getSearchSuggestions } from "@/api"
import searchList from "@/assets/json/searchEngine.json"
import { createFromIconfontCN, SearchOutlined } from "@ant-design/icons-vue"
import { ref } from "vue"

const IconFont = createFromIconfontCN({
	scriptUrl: import.meta.env.VITE_ICONFONT
})

const props = defineProps<{
	text: string
}>()

let items = ref()
// 提示列表所选序号 初始值为0
let select = 0
// 搜索提示列表
const languageListLi = <any>document.getElementsByClassName("languageList-Li")
// 提示列表选择键盘事件
let selectText = (value: any) => {
	select += value
	// 限制所选序号数值大小
	select = Math.max(select, 1)
	select = Math.min(select, items.value.length)
	emits("changeText", items.value[select - 1])
	for (let i = 0; i < languageListLi.length; i++) {
		languageListLi[i].style.backgroundColor = i === select ? "#afafaf" : "#ddd0"
		languageListLi[i].style.letterSpacing = i === select ? "1px" : 0
		languageListLi[i].style.padding = i === select ? "0 20px" : "0 15px"
	}
}
// 生成的提示列表高度
let listHeight = <any>ref(0)
// 搜索提示
let searchText = () => {
	if (!props.text) listHeight.value = 0
	select = -1
	getSearchSuggestions(props.text).then((res: any) => {
		items.value = res
		listHeight.value = items.value.length * 26 + 26 + "px"
	})
}

const emits = defineEmits<{
	(event: "search", item: any): void
	(event: "changeText", text: string): void
}>()

defineExpose({
	selectText,
	searchText
})
</script>
<style lang="scss" scoped>
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
	li {
		@include box-border-radius(5px);
		font-size: 14px;
		line-height: 25px;
		height: 26px;
		padding: 0 15px;
		cursor: pointer;
		transition: 0.3s;
		&:hover {
			padding: 0 20px;
			transition: 0.3s;
			letter-spacing: 1px;
			background-color: #afafaf;
		}
	}
}
</style>
