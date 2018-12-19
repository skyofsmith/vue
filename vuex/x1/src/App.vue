<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    {{count}}
    <button @click="add">Add</button>
  </div>
</template>

<script>
import store from './store'

export default {
  name: 'app',
  store,
  computed: {
    count () {
      return store.state.count
    }
  },
  methods: {
    add () {
      store.commit('increment')
    }
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
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
