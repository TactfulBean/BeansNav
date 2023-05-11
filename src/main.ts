import { createApp } from "vue";

import "./assets/css/global.less";

import App from "./App.vue";

import axios from "axios";

import Config from "./config/Config.ts";

const app = createApp(App);

app.config.globalProperties.$Config = Config;
app.config.globalProperties.$Axios = axios;

app.mount("#app");
