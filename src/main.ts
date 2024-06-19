// 自定义样式文件
import "@/assets/style/main.scss"
// unocss
import "@unocss/reset/tailwind.css"
// Pinia
import { createPinia } from "pinia"
import piniaPluginPersistedstate from "pinia-plugin-persistedstate"

import "virtual:uno.css"
import { createApp } from "vue"
import App from "./App.vue"
import { Message } from "@arco-design/web-vue"
const app = createApp(App)

Message._context = app._context
app.config.warnHandler = () => null

app.use(createPinia().use(piniaPluginPersistedstate))
app.mount("#app")
