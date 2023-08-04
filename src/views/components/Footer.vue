<template>
	<footer>
		<div id="footerBox">
			<span class="footer-span">© 2023</span>
			<a class="footer-link" href="https://github.com/TactfulBean">TactfulBean</a>
			<span class="footer-span"> 丨 </span>
			<a class="footer-link" href="https://github.com/TactfulBean/Homepage-Vite">Version {{ VERSION }}</a>
			<span class="footer-span"> 丨 </span>
			<a class="footer-link" href="https://beian.miit.gov.cn/">冀ICP备-2023003086号-1</a>
		</div>
	</footer>
</template>

<script lang="ts" setup>
const VERSION = import.meta.env.VITE_VERSION
</script>

<style lang="scss" scoped>
footer {
	@include center;
	font-size: 12px;
	position: fixed;
	z-index: 999;
	bottom: 10px;
	display: inline-block;
	width: fit-content;
	text-align: center;
	white-space: nowrap;
	color: $text-color-light;
	text-shadow: $text-shadow;
	#footerBox {
		@include box-border-radius(5px);
		padding: 3px 10px;
		backdrop-filter: $backdrop-filter;
		.footer-link {
			cursor: pointer;
			text-decoration: none;
			color: $text-color-light-opacity;
			&:hover {
				color: $text-color-light;
			}
		}
		.footer-span {
			cursor: default;
			color: $text-color-light-opacity;
		}
	}
}
@media screen and (max-height: 576px) {
	#footerBox {
		@include animation-hide;
	}
}
</style>
