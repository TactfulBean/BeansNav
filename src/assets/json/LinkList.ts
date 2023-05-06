import { reactive } from "vue";

let menuList = reactive([
	{
		name: "常用网站",
		child: [
			{
				name: "异世界动漫",
				link: "https://www.sbdm.net/",
				avatar: "https://www.sbdm.net/template/conch/asset/img/favicon.png"
			},
			{
				name: "柒之社",
				link: "https://www.07vod.fun/",
				avatar: "https://www.07vod.fun/favicon.png"
			},
			{
				name: "NyaFun",
				link: "https://www.mfan.tv/",
				avatar: "https://www.mfan.tv/favicon.ico"
			},
			{
				name: "大米星球",
				link: "https://www.dmxq.me/",
				avatar: "https://ugc.hitv.com/1/22101302373440A2E346E1415C87955C155B224B5Qzkx/dRaWOH0.png"
			},
			{
				name: "哔嘀影视",
				link: "https://www.bdys01.com/",
				avatar: "https://www.bdys01.com/images/favicon.ico"
			},
			{
				name: "Switch520",
				link: "https://xxxxx525.com/",
				avatar: "https://sway.office.com/s/bRQwebfLdaNez2Nl/images/P31w2bg4VTaH9a"
			},
			{
				name: "磁力熊猫",
				link: "https://xiongmaodizhi.top/",
				avatar: "https://b5.us.yaacdn.com/img/xiongmao/favicon.png"
			}
		]
	},
	{
		name: "常用工具",
		child: [
			{
				name: "ChatGPT",
				link: "https://gpt.tactfulbean.top/",
				avatar: "https://gpt.tactfulbean.top/favicon.ico"
			},
			{
				name: "谷歌学术镜像",
				link: "https://ac.scmor.com/",
				avatar: "https://upyun.tactfulbean.top/2023/05/6451c925a35ea.png"
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
			},
			{
				name: "Convertio",
				link: "https://convertio.co/zh/",
				avatar: "https://convertio.co/favicon.ico"
			},
			{
				name: "Docsmall",
				link: "https://docsmall.com/",
				avatar: "https://docsmall.com/favicon.png"
			}
		]
	},
	{
		name: "技术学习",
		child: [
			{
				name: "Vue3",
				link: "https://cn.vuejs.org/",
				avatar: "https://cloud.tactfulbean.top/f/6xHw/vuejs.svg"
			},
			{
				name: "Vite",
				link: "https://cn.vitejs.dev/",
				avatar: "https://cloud.tactfulbean.top/f/0EFB/vitejs.svg"
			},
			{
				name: "Ant Design",
				link: "https://ant-design.antgroup.com/index-cn",
				avatar: "https://cloud.tactfulbean.top/f/owh9/ant-design-vue.svg"
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
				name: "OpenLayers",
				link: "https://openlayers.org/",
				avatar: "https://cloud.tactfulbean.top/f/e6Sb/openlayers.svg"
			},
			{
				name: "JDK Download",
				link: "https://www.oracle.com/java/technologies/java-se-glance.html",
				avatar: "https://cloud.tactfulbean.top/f/BVUa/Oracle%20Corporation%20Logo.svg"
			},
			{
				name: "JSDelivr",
				link: "https://www.jsdelivr.com/",
				avatar: "https://cloud.tactfulbean.top/f/VrId/jsdelivr.svg"
			},
			{
				name: "Netlify",
				link: "https://app.netlify.com/",
				avatar: "https://cloud.tactfulbean.top/f/nxsg/netlify.svg"
			}
		]
	},
	{
		name: "趣味网站",
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
		child: [
			{
				name: "MC Wiki",
				link: "https://minecraft.fandom.com/zh/wiki/Minecraft_Wiki",
				avatar: "https://upyun.tactfulbean.top/2023/05/6451c925b564f.png"
			},
			{
				name: "MC百科",
				link: "https://www.mcmod.cn/",
				avatar: "https://upyun.tactfulbean.top/2023/05/6451c925b564f.png"
			},
			{
				name: "Terraria Wiki",
				link: "https://terraria.wiki.gg/zh/wiki/Terraria_Wiki",
				avatar: "https://upyun.tactfulbean.top/2023/05/6451c92591ef7.png"
			},
			{
				name: "战双帕弥什 Wiki",
				link: "https://wiki.biligame.com/zspms/%E9%A6%96%E9%A1%B5",
				avatar: "https://upyun.tactfulbean.top/2023/05/6451c9259c72b.png"
			},
			{
				name: "星露谷物语 Wiki",
				link: "https://zh.stardewvalleywiki.com/Stardew_Valley_Wiki",
				avatar: "https://upyun.tactfulbean.top/2023/05/6451c925b79cf.png"
			},
			{
				name: "原神 Wiki",
				link: "https://bbs.mihoyo.com/ys/obc/?bbs_presentation_style=no_header",
				avatar: "https://upyun.tactfulbean.top/2023/05/6451c9fc3262b.png"
			},

			{
				name: "明日方舟 Wiki",
				link: "https://prts.wiki/w/%E9%A6%96%E9%A1%B5",
				avatar: "https://upyun.tactfulbean.top/2023/05/6451c92610cfe.png"
			},
			{
				name: "饥荒 Wiki",
				link: "https://dontstarve.huijiwiki.com/wiki/%E9%A6%96%E9%A1%B5",
				avatar: "https://upyun.tactfulbean.top/2023/05/6454a09390e46.png"
			}
		]
	}
]);
export { menuList };
