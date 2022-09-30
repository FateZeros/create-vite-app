import { createApp } from "vue";
import App from "./App.vue";
import { Input, message } from "ant-design-vue";

const app = createApp(App);
app.use(Input).mount("#app");

app.config.globalProperties.$message = message;
