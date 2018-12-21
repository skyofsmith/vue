<template>
  <div id="app">
    {{c}}
    <button @click="add">Add</button>
    <button @click="dec">Dec</button>
    <hr>
    {{n}}
    <input type="text" v-model="name" @change="nameChange">
    {{a}}
    <input type="text" v-model.number="age" @change="ageChange">
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      name: '',
      age: 0
    }
  },
  created () {
    this.name = this.$store.state.name
    this.age = this.$store.state.age
  },
  computed: {
    c () {
      return this.$store.state.count
    },
    n () {
      return this.$store.state.name
    },
    a () {
      return this.$store.state.age
    }
  },
  methods: {
    add () {
      this.$store.commit('increment')
    },
    dec () {
      this.$store.commit('decrement')
    },
    nameChange () {
      window.console.log('name changed')
      this.$store.commit('setName', this.name)
    },
    ageChange () {
      window.console.log('name changed')
      this.$store.commit('setAge', this.age)
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
