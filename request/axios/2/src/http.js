import Vue from 'vue'
import Axios from 'axios'

const $axios = Axios.create({
  baseURL: 'http://localhost:8080'
})

Vue.prototype.$axios = $axios
