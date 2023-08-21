<template>
	<div>
		<span>动态壁纸：</span>
		<a-switch :checked="settingStore.wallPaperType == 2" @change="changeWallPaperType" />
	</div>
</template>
<script setup lang="ts">
import { useSettingStore } from "@/stores/Config.ts"

const settingStore = useSettingStore()
// 壁纸类型
let changeWallPaperType = (e: number) => {
	settingStore.wallPaperType = e ? 2 : 1
}
</script>
<style scoped lang="scss"></style>
