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
import { mapGetters } from 'vuex'

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
    /*
    doneTodos () {
      return this.$store.getters.doneTodos
    },
    doneTodosCount () {
      return this.$store.getters.doneTodosCount
    },
    */
    // ...mapGetters(['doneTodos', 'doneTodosCount'])
    ...mapGetters({
      doneTodos: 'doneTodos',
      doneTodosCount: 'doneTodosCount'
    })
  }
}
</script>

<style>
#app2 {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
