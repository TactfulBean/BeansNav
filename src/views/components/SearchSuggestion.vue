<template>
	<ul id="languageList" :style="{ height: listHeight }">
		<li class="languageList-Li" style="padding: 0 20px; color: #818181">
			<icon-font style="color: #565656" type="icon-baidu"></icon-font> 以下结果来自百度搜索建议
		</li>
		<li v-for="(item, index) in items" class="languageList-Li" @click="emits('search', item)" @mouseover="mouseSelect(index)">
			<search-outlined style="color: #1e90ff" />
			{{ item }}
		</li>
	</ul>
</template>
<script lang="ts" setup>
import { getSearchSuggestions } from "@/api"
import { createFromIconfontCN, SearchOutlined } from "@ant-design/icons-vue"
import { onMounted, ref } from "vue"

const IconFont = createFromIconfontCN({
	scriptUrl: import.meta.env.VITE_ICONFONT
})

const props = defineProps<{
	text: string
}>()

onMounted(() => {
	searchText()
})

let items = ref()
// 提示列表所选序号 初始值为0
let select = 0
// 搜索提示列表
const languageListLi = <any>document.getElementsByClassName("languageList-Li")
// 提示列表选择键盘事件
let selectText = (value: number) => {
	select += value
	// 限制所选序号数值大小
	select = Math.max(select, 1)
	select = Math.min(select, items.value.length)
	if (value !== 0) emits("changeText", items.value[select - 1])
	for (let i = 0; i < languageListLi.length; i++) {
		languageListLi[i].style.backgroundColor = i === select ? "#afafaf" : "#ddd0"
		languageListLi[i].style.letterSpacing = i === select ? "1px" : 0
		languageListLi[i].style.padding = i === select ? "0 20px" : "0 15px"
	}
}
// 生成的提示列表高度
let listHeight = ref()
// 搜索提示
let searchText = () => {
	if (!props.text) listHeight.value = 0
	select = -1
	getSearchSuggestions(props.text).then((res: any) => {
		items.value = res.data.s
		listHeight.value = items.value.length * 26 + 26 + "px"
	})
}

let mouseSelect = (index: number) => {
	select = index + 1
	selectText(0)
}

const emits = defineEmits<{
	search: [item: any]
	changeText: [text: string]
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
	.languageList-Li {
		@include box-border-radius(5px);
		font-size: 14px;
		line-height: 25px;
		height: 26px;
		padding: 0 15px;
		cursor: pointer;
		transition: 0.3s;
	}
}
</style>
