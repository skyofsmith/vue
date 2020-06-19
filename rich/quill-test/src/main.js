import Vue from 'vue'
import App from './App.vue'
import  VueQuillEditor from 'vue-quill-editor'
import * as Quill from 'quill' //引入编辑器
import { ImageDrop } from 'quill-image-drop-module';

Quill.register('modules/imageDrop', ImageDrop);

import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
Vue.use(VueQuillEditor)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
