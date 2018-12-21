import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    name: 'sam',
    age: 27
  },
  mutations: {
    increment (state) {
      state.count++
    },
    decrement (state) {
      state.count--
    },
    setName (state, newName) {
      state.name = newName
    },
    setAge (state, newAge) {
      state.age = newAge
    }
  },
  actions: {

  }
})
