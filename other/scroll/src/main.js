import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vueScroll from "vuescroll";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import './bus'

Vue.use(vueScroll);
Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
