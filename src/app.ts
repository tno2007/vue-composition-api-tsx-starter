import Vue from "vue";
Vue.config.productionTip = false;

import IdleVue from "idle-vue";

const eventsHub = new Vue();

Vue.use(IdleVue, {
  eventEmitter: eventsHub,
  idleTime: 10000,
});

// Install BootstrapVue
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
Vue.use(BootstrapVue);

import "./scss/app.scss";
//import "./scss/f7.scss";

import VueCompositionApi from "@vue/composition-api";
import App from "./components/App";
Vue.use(VueCompositionApi);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
