import presetLegacyCompat from "@unocss/preset-legacy-compat"
import { defineConfig, presetAttributify, presetIcons, presetWind3 } from "unocss"

export default defineConfig({
  presets: [
    presetWind3(),
    presetAttributify(),
    presetIcons(),
    presetLegacyCompat({
      commaStyleColorFunction: true,
      legacyColorSpace: true
    })
  ],
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
  ]
})
