import Vue from 'vue'

const bus = new Vue();

let eventBus = {
  install (Vue) {
    Vue.prototype.$bus = bus
  }
};
Vue.use(eventBus);