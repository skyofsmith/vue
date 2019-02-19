import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/a',
      name: 'A',
      component: () => import('@/views/a/A.vue')
    }
  ]
})
