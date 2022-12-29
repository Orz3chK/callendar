import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import RelativeContainer from "./ui/RelativeContainer.vue";
import JustButton from "./ui/JustButton.vue";

const app = createApp(App);

app.use(router);
app.mount("#app");

app.component("relative-container", RelativeContainer);
app.component("just-button", JustButton);
