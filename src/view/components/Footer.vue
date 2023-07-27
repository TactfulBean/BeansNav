<template>
	<footer>
		<div id="footerBox">
			<span class="footer-span">© 2023</span>
			<a href="https://github.com/TactfulBean" class="footer-link">TactfulBean</a>
			<span class="footer-span"> 丨 </span>
			<a href="https://github.com/TactfulBean/Homepage-Vite" class="footer-link">Version 3.3.4</a>
			<span class="footer-span"> 丨 </span>
			<a href="https://beian.miit.gov.cn/" class="footer-link">冀ICP备-2023003086号</a>
		</div>
	</footer>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
footer {
	z-index: 999;
	color: #fff;
	position: fixed;
	bottom: 10px;
	left: 50%;
	transform: translateX(-50%);
	width: fit-content;
	font-size: 12px;
	text-align: center;
	text-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
	white-space: nowrap;
	display: inline-block;
}
#footerBox {
	padding: 3px 10px;
	border-radius: 6px;
	backdrop-filter: blur(10px);
}
.footer-link {
	text-decoration: none;
	color: #fff7;
	cursor: pointer;
}
.footer-link:hover {
	color: #fff;
}
.footer-span {
	cursor: default;
	color: #fff7;
}
@media screen and (max-height: 576px) {
	#footerBox {
		animation: hide 0.3s;
		opacity: 0;
	}
}
</style>
