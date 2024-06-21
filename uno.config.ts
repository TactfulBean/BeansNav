import { defineConfig, presetAttributify, presetIcons, presetUno } from "unocss"

export default defineConfig({
  presets: [presetUno(), presetAttributify(), presetIcons()],
  shortcuts: [
    ["wh-full", "w-full h-full"],
    ["flex-col", "flex flex-col"],
    ["flex-center", "flex justify-center items-center"],
    ["left-center", "translate-x-[-50%] left-50%"],
    ["absolute-0", "absolute left-0 top-0 right-0 bottom-0"],
    // 阴影
    ["shadow1", "shadow-[0_4px_5px_rgba(0,0,0,0.1)]"],
    ["shadow_special", "shadow-[0_0_1px_rgba(0,0,0,0.3)]"],
    ["shadow1_center", "shadow-[0_-2px_5px_rgba(0,0,0,0.1)]"],
    ["shadow2_center", "shadow-[0_0_10px_rgba(0,0,0,0.1)]"],
    ["shadow3_center", "shadow-[0_0_20px_rgba(0,0,0,0.1)]"],
    // 页面组件
    [
      "b-button",
      "m-5 duration-300 cursor-pointer flex-center color-color_text_2 bg-color_bg_4 hover:bg-color_fill_3 border border-color_border_2 shadow1"
    ]
  ],
  rules: [
    [
      "bg-full",
      {
        "background-size": "100% 100%"
      }
    ],
    [/^hc-(\d+)$/, ([, d]) => ({ height: `calc(100% - ${Number(d) / 4}rem)` })],
    [/^wc-(\d+)$/, ([, d]) => ({ width: `calc(100% - ${Number(d) / 4}rem)` })],
    [/^wh-(\d+)$/, ([, d]) => ({ width: `${Number(d) / 4}rem`, height: `${Number(d) / 4}rem` })]
  ],
  theme: {
    colors: {
      // 背景色
      color_bg_1: "var(--b-color-bg-1)",
      color_bg_2: "var(--b-color-bg-2)",
      color_bg_3: "var(--b-color-bg-3)",
      color_bg_4: "var(--b-color-bg-4)",
      color_bg_5: "var(--b-color-bg-5)",
      color_bg_white: "var(--b-color-bg-white)",
      color_bg_opacity: "var(--b-color-bg-opacity)",
      // 填充颜色
      color_fill_1: "var(--b-color-fill-1)",
      color_fill_2: "var(--b-color-fill-2)",
      color_fill_3: "var(--b-color-fill-3)",
      color_fill_4: "var(--b-color-fill-4)",
      // 字体颜色
      color_text_1: "var(--b-color-text-1)",
      color_text_2: "var(--b-color-text-2)",
      color_text_3: "var(--b-color-text-3)",
      color_text_4: "var(--b-color-text-4)",
      // 边框
      color_border_1: "var(--b-color-border-1)",
      color_border_2: "var(--b-color-border-2)",
      color_border_3: "var(--b-color-border-3)",
      color_border_4: "var(--b-color-border-4)"
    }
  }
})
