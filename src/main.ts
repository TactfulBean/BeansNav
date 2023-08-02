import { createApp } from "vue"

import "@/assets/style/main.scss"

import App from "@/App.vue"

import { createPinia } from "pinia"
import piniaPluginPersistedstate from "pinia-plugin-persistedstate"

const app = createApp(App)

app.config.warnHandler = () => null

app.use(createPinia().use(piniaPluginPersistedstate))
app.mount("#app")
