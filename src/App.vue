<template>
	<Main></Main>
</template>
<script lang="ts" setup>
import Main from "@/views/index.vue"
import { onMounted } from "vue"

onMounted(() => {
	console.log(
		"%c" +
			"\n" +
			"  _______         _    __       _ ____                   \n" +
			" |__   __|       | |  / _|     | |  _ \\                  \n" +
			"    | | __ _  ___| |_| |_ _   _| | |_) | ___  __ _ _ __  \n" +
			"    | |/ _` |/ __| __|  _| | | | |  _ < / _ \\/ _` | '_ \\ \n" +
			"    | | (_| | (__| |_| | | |_| | | |_) |  __/ (_| | | | |\n" +
			"    |_|\\__,_|\\___|\\__|_|  \\__,_|_|____/ \\___|\\__,_|_| |_|\n" +
			"                                                         \n" +
			"                                                         \n",
		"color:#177cb0"
	)
})
</script>
<style lang="scss" scoped></style>
