<template>
  <div id="app">
    {{count}}
    <button @click="add(1)">Add</button>
    <br>
    <input type="text" v-model.number="num">
    <button @click="add(num)">Add Some</button>
    <br>
    <pre>{{person}}</pre>
    <button @click="changePerson">change to another person</button>
    <br>
    <br>
    {{msg}}
    <button @click="send">send</button>
  </div>
</template>

<script>
import { SOME_MUTATION } from './mutation-types'
export default {
  name: 'app',
  data () {
    return {
      num: 0
    }
  },
  computed: {
    count () {
      return this.$store.state.count
    },
    person () {
      return this.$store.state.person
    },
    msg () {
      return this.$store.state.msg
    }
  },
  methods: {
    send () {
      this.$store.commit('sendMessage')
    },
    changePerson () {
      this.$store.commit(SOME_MUTATION, {
        name: 'zz',
        age: 0,
        gender: 'M'
      })
      // this.$store.commit(SOME_MUTATION, {
      //   name: 'zz',
      //   age: 0,
      //   gender: 'M'
      // })
    },
    add (n = 1) {
      this.$store.commit({
        type: 'increment',
        amount: n
      })
    }
    // add (n = 1) {
    //   this.$store.commit('increment', n)
    // }
  },
  components: {
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
