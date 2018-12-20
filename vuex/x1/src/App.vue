<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    {{count}}
    <button @click="add">Add</button>
    <button @click="dec">Dec</button>
  </div>
</template>

<script>
export default {
  name: 'app',
  computed: {
    count () {
      return this.$store.state.count
    }
  },
  methods: {
    add () {
      this.$store.commit('increment')
    },
    dec () {
      this.$store.commit('decrement')
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
