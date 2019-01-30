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
import Input from './views/form/components/Input'
import InputNumber from './views/form/components/InputNumber'
import Select from './views/form/components/Select'
import Cascader from './views/form/components/Cascader'
import Switch from './views/form/components/Switch'
import Slider from './views/form/components/Slider'
import TimePicker from './views/form/components/TimePicker'
import DatePicker from './views/form/components/DatePicker'
import DateTimePicker from './views/form/components/DateTimePicker'
import Upload from './views/form/components/Upload'
import Rate from './views/form/components/Rate'

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
      component: Input
    },
    {
      path: 'inputnumber',
      component: InputNumber
    },
    {
      path: 'select',
      component: Select
    },
    {
      path: 'cascader',
      component: Cascader
    },
    {
      path: 'switch',
      component: Switch
    },
    {
      path: 'slider',
      component: Slider
    },
    {
      path: 'timepicker',
      component: TimePicker
    },
    {
      path: 'datepicker',
      component: DatePicker
    },
    {
      path: 'datetimepicker',
      component: DateTimePicker
    },
    {
      path: 'upload',
      component: Upload
    },
    {
      path: 'rate',
      component: Rate
    },
    ]
  }
  ]
})