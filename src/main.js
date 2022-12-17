import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import BaseCard from ".//ui/BaseCard.vue";

createApp(App).use(router).mount("#app");

App.component("base-card", BaseCard);
