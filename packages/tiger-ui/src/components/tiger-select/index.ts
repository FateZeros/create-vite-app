import type { App } from "vue";
import TigerSelect from "./tiger-select.vue";

TigerSelect.install = function (app: App) {
  app.component(TigerSelect.name, TigerSelect);
};

export default TigerSelect;
