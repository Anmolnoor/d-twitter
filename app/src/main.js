import { createApp } from "vue";
import App from "./App.vue";

// Routing.
import { createRouter, createWebHashHistory } from "vue-router";
import routes from "./routes";

// CSS.
import "./main.css";
import "solana-wallets-vue/styles.css";

// Day.js
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(localizedFormat);
dayjs.extend(relativeTime);

const router = createRouter({
	history: createWebHashHistory(),
	routes
});

createApp(App).use(router).mount("#app");
