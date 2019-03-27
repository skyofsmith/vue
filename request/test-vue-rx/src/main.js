import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import VueRx from "vue-rx";
// or with script in html file <script src="https://unpkg.com/rxjs/bundles/rxjs.umd.js"></script>
Vue.use(VueRx);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
