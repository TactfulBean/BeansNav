import { defineConfig, presetAttributify, presetIcons, presetUno } from "unocss"

export default defineConfig({
  presets: [presetUno(), presetAttributify(), presetIcons()],
  shortcuts: [
    ["wh-full", "w-full h-full"],
    ["flex-col", "flex flex-col"],
    ["flex-center", "flex justify-center items-center"],
    ["absolute-0", "absolute left-0 top-0 right-0 bottom-0"]
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
