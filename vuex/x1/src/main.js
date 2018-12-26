import Vue from 'vue'
// import App from './App.vue'
// import App2 from './App2.vue'
import App3 from './App3.vue'
// import store from './store'
// import store2 from './store2'
import store3 from './store3'

Vue.config.productionTip = false

new Vue({
  store: store3,
  render: h => h(App3)
}).$mount('#app3')
/*
new Vue({
  store: store2,
  render: h => h(App2)
}).$mount('#app2')
*/
/* 
new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
 */