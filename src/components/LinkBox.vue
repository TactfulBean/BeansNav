<template>
	<div id="carousel" @wheel="mouseWheel">
		<a-carousel dot-position="right" ref="linkCarousel">
			<div class="layout-col layout-row" v-for="item in menuList">
				<span style="width: 100%; color: #fff; display: block">{{ item.name }}</span>
				<div class="app-group-item" v-for="item2 in item.child">
					<div>
						<a :href="item2.link">
							<a-button>
								<a-avatar class="app-group-item-icon" shape="square" :src="item2.avatar">{{ item2.name }}</a-avatar>
							</a-button>
						</a>
					</div>
					<span style="width: 70px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; display: inline-block; color: #fff">{{
						item2.name
					}}</span>
				</div>
			</div>
		</a-carousel>
	</div>
</template>

<script setup lang="ts">
import { createFromIconfontCN } from "@ant-design/icons-vue";
import { ref, reactive } from "vue";

let linkCarousel = ref<HTMLElement | null>(null);

const IconFont = createFromIconfontCN({
	scriptUrl: "//at.alicdn.com/t/c/font_3627162_97fzu7jybss.js"
});
const mouseWheel = (event) => {
	if (event.deltaY > 0) {
		linkCarousel.value.next();
	} else {
		linkCarousel.value.prev();
	}
};
let menuList = reactive([
	{
		name: "常用工具",
		class: "1",
		child: [
			{
				name: "ChatGPT",
				link: "https://gpt.tactfulbean.top/",
				avatar: "https://gpt.tactfulbean.top/favicon.ico"
			},
			{
				name: "Emoji表情大全",
				link: "https://emojixd.com/",
				avatar: "https://emojixd.com/favicon.ico"
			},
			{
				name: "设计配色",
				link: "https://color.uisdc.com/",
				avatar: "https://color.uisdc.com/favicon.ico"
			},
			{
				name: "聚合图床",
				link: "https://www.superbed.cn/",
				avatar: "https://www.superbed.cn/favicon.ico"
			}
		]
	},
	{
		name: "技术学习",
		class: "2",
		child: [
			{
				name: "谷歌学术镜像",
				link: "https://ac.scmor.com/",
				avatar: "https://ac.scmor.com/res/favicon.ico"
			},
			{
				name: "Element Plus",
				link: "https://element-plus.gitee.io/zh-CN/",
				avatar: "https://element-plus.gitee.io/images/element-plus-logo-small.svg"
			},
			{
				name: "Iconfont",
				link: "https://www.iconfont.cn/",
				avatar: "https://img.alicdn.com/imgextra/i4/O1CN01Z5paLz1O0zuCC7osS_!!6000000001644-55-tps-83-82.svg"
			},
			{
				name: "Echarts",
				link: "https://echarts.apache.org/zh/index.html",
				avatar: "https://echarts.apache.org/zh/images/favicon.png?_v_=20200710_1"
			},
			{
				name: "ArcGIS API",
				link: "https://developers.arcgis.com/",
				avatar: "https://developers.arcgis.com/favicon-32x32.png?v=fa7158ccbf3dcca10ca42df7f742e378"
			},
			{
				name: "OpenLayers",
				link: "https://openlayers.org/",
				avatar: "https://openlayers.org/theme/img/logo-light.svg"
			},
			{
				name: "JDK Download",
				link: "https://www.oracle.com/java/technologies/java-se-glance.html",
				avatar: "https://www.oracle.com/asset/web/favicons/favicon-32.png"
			},
			{
				name: "JSDelivr",
				link: "https://www.jsdelivr.com/",
				avatar: "https://www.jsdelivr.com/favicon.ico"
			},
			{
				name: "Cloudflare",
				link: "https://dash.cloudflare.com/",
				avatar: "https://dash.cloudflare.com/favicon.ico"
			},
			{
				name: "Netlify",
				link: "https://app.netlify.com/",
				avatar: "https://app.netlify.com/favicon.ico"
			}
		]
	},
	{
		name: "资源搜索",
		class: "3",
		child: [
			{
				name: "种子吧",
				link: "http://seed8.org",
				avatar: "https://pic.imgdb.cn/item/63bcf393be43e0d30e20736f.png"
			},
			{
				name: "巴士资源",
				link: "http://bashi5.net/?bt",
				avatar: "http://bashi5.net/favicon.ico"
			}
		]
	},
	{
		name: "趣味网站",
		class: "5",
		child: [
			{
				name: "Emoji合成",
				link: "https://tikolu.net/emojimix/",
				avatar: "https://tikolu.net/emojimix/icons/meowtle.png"
			},
			{
				name: "小霸王",
				link: "https://www.yikm.net/",
				avatar: "https://pic.imgdb.cn/item/63d20182face21e9ef3fdff2.png"
			},
			{
				name: "人生重开模拟器",
				link: "https://liferestart.syaro.io/public/index.html",
				avatar: "https://liferestart.syaro.io/favicon.ico"
			},
			{
				name: "鼠标在哪",
				link: "https://pointerpointer.com/",
				avatar: "https://pointerpointer.com/favicon.ico"
			},
			{
				name: "解谜游戏",
				link: "https://nazo.one-story.cn/",
				avatar: "https://nazo.one-story.cn/favicon.ico"
			}
		]
	},
	{
		name: "WIKI",
		class: "6",
		child: [
			{
				name: "MC Wiki",
				link: "https://minecraft.fandom.com/zh/wiki/Minecraft_Wiki",
				avatar: "https://pic.imgdb.cn/item/639ff88eb1fccdcd361fb993.png"
			},
			{
				name: "MC百科",
				link: "https://www.mcmod.cn/",
				avatar: "https://www.mcmod.cn/images/favicon.ico"
			},
			{
				name: "Terraria Wiki",
				link: "https://terraria.wiki.gg/zh/wiki/Terraria_Wiki",
				avatar: "https://terraria.wiki.gg/zh/images/4/4a/Site-favicon.ico"
			},
			{
				name: "战双帕弥什 Wiki",
				link: "https://wiki.biligame.com/zspms/%E9%A6%96%E9%A1%B5",
				avatar: "https://static.hdslb.com/images/favicon.ico"
			},
			{
				name: "星露谷物语 Wiki",
				link: "https://zh.stardewvalleywiki.com/Stardew_Valley_Wiki",
				avatar: "https://zh.stardewvalleywiki.com/mediawiki/extensions/StardewValley/images/favicon.png"
			},
			{
				name: "原神 Wiki",
				link: "https://bbs.mihoyo.com/ys/obc/?bbs_presentation_style=no_header",
				avatar: "https://bbs.mihoyo.com/favicon.ico"
			},
			{
				name: "明日方舟 Wiki",
				link: "https://prts.wiki/w/%E9%A6%96%E9%A1%B5",
				avatar: "https://prts.wiki/favicon.ico"
			}
		]
	}
]);
</script>

<style scoped lang="less">
#carousel {
	position: absolute;
	top: 400px;
	left: 50%;
	width: 70%;
	height: 320px;
	transform: translateX(-50%);
}

.ant-carousel :deep(.slick-slide) {
	height: 320px;
}

.app-group-item {
	padding: 10px 5px;

	.ant-btn {
		padding: 0 !important;
		min-width: 64px;
		min-height: 64px;
		border-radius: 15px;
	}
	.app-group-item-icon {
		min-width: 48px;
		min-height: 48px;
		border-radius: 10px;
	}
}

.layout-col {
	.app-group-item {
		text-align: center;
		display: inline-block;
	}
}

.layout-row {
	.app-group-item {
		width: calc(100% / 8);
	}
}
//max-width<400px
@media screen and (max-width: 400px) {
}
//max-width<600px
@media screen and (max-width: 600px) {
	#carousel {
		top: 323px;
		width: 90%;
	}

	.layout-row {
		.app-group-item {
			width: calc(100% / 4);
		}
	}

	.app-group-item {
		.ant-btn {
			min-width: 48px;
			min-height: 48px;
			border-radius: 10px;
		}
		.app-group-item-icon {
			min-width: 32px;
			min-height: 32px;
			border-radius: 8px;
		}
	}
}
</style>
