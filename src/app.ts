import Vue from "vue";
Vue.config.productionTip = false;

import VueCompositionApi from "@vue/composition-api";
import App from "./components/App";
Vue.use(VueCompositionApi);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
