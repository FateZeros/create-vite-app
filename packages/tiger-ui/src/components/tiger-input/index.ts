import type { App } from "vue";
import TigerInput from "./tiger-input.vue";

TigerInput.install = function (app: App) {
  app.component(TigerInput.name, TigerInput);
};

export default TigerInput;
