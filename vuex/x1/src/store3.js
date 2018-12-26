import Vue from 'vue'
import Vuex from 'vuex'
import { SOME_MUTATION } from './mutation-types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 1,
    msg: 'waiting for you to press the button.',
    person: {
      name: 'sam',
      age: 27
    }
  },
  mutations: {
    increment (state, payload) {
      state.count += payload.amount
    },
    // setPerson (state, person) {
    //   state.peron = person
    // }
    // setPerson (state, person) {
    //   state.person.name = person.name
    //   state.person.age = person.age
    //   state.person.gender = person.gender
    // }
    // setPerson (state, person) {
    //   state.person = {
    //     ...state.obj,
    //     ...person
    //   }
    // }
    [SOME_MUTATION] (state, person) {
      for(let k in person) {
        Vue.set(state.person, k, person[k])
      }
    },
    sendMessage (state) {
      setTimeout(() => {
        state.msg = 'sendded you!!!'
      }, 10000);
    }
  }
})
