<template>
  <div id="app2">
    {{msg}}
    <br>
    <!-- doneTodosCount: {{doneTodosCount}} -->
    <br>
    doneTodos: {{doneTodos}}
  </div>
</template>

<script>

export default {
  name: 'app2',
  data () {
    return {
      msg: 'hello'
    }
  },
  computed: {
    doneTodos () {
      return this.$store.getters.doneTodos
    },
    doneTodosCount () {
      // return this.$store.getters.doneTodosCount
    },
  }
}
</script>

<style>
#app2 {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
