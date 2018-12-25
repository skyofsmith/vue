<template>
  <div id="app2">
    <br>
    <p>
      doneTodosCount: {{doneTodosCount}}
    </p>
    <br>
    <p>
      doneTodos: 
      <pre>{{doneTodos}}</pre>
    </p>
  </div>
</template>

<script>

export default {
  name: 'app2',
  data () {
    return {
    }
  },
  computed: {
    // doneTodosCount () {
    //   return this.$store.state.todos.filter(todo => todo.done).length
    // },
    doneTodos () {
      return this.$store.getters.doneTodos
    },
    doneTodosCount () {
      return this.$store.getters.doneTodosCount
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
