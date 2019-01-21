import Vue from 'vue'
import Router from 'vue-router'

import Basic from './views/basic/Basic.vue'
import Layout from './views/basic/components/Layout.vue'
import Container from './views/basic/components/Container.vue'
import Color from './views/basic/components/Color.vue'
import Typography from './views/basic/components/Typography.vue'
import Icon from './views/basic/components/Icon.vue'
import Button from './views/basic/components/Button.vue'

import Form from './views/form/Form'
import Radio from './views/form/components/Radio'
import Checkbox from './views/form/components/Checkbox'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/basic'
  },
  {
    path: '/basic',
    name: 'basic',
    component: Basic,
    children: [{
      path: 'layout',
      component: Layout
    },
    {
      path: 'container',
      component: Container
    },
    {
      path: 'color',
      component: Color
    },
    {
      path: 'typography',
      component: Typography
    },
    {
      path: 'icon',
      component: Icon
    },
    {
      path: 'button',
      component: Button
    },
    ]
  },
  {
    path: '/form',
    name: 'form',
    component: Form,
    children: [{
      path: 'radio',
      component: Radio
    },
    {
      path: 'checkbox',
      component: Checkbox
    },
    {
      path: 'input',
      component: Checkbox
    },

    ]
  }
  ]
})