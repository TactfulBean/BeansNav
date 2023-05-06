import { createApp } from "vue";

import "./assets/css/global.less";

import App from "./App.vue";

import Config from "./config/Config.ts";

const app = createApp(App);

app.config.globalProperties.$Config = Config;

app.mount("#app");
