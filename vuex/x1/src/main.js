import Vue from 'vue'
import App from './App.vue'
import App2 from './App2.vue'
import store from './store'
import store2 from './store2'

Vue.config.productionTip = false

new Vue({
  store2,
  render: h => h(App2)
}).$mount('#app2')

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')