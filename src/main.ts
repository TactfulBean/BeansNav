import { createApp } from "vue";

import "./assets/css/global.less";

import App from "./App.vue";

import axios from "axios";

import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

const app = createApp(App);

app.config.globalProperties.$Axios = axios;

app.use(createPinia().use(piniaPluginPersistedstate));
app.mount("#app");
