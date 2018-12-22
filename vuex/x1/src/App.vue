<template>
  <div id="app">
    {{c}}
    <button @click="add">Add</button>
    <button @click="dec">Dec</button>
    {{gender}}
    <hr>
    {{n}}
    <input type="text" v-model="name" @change="nameChange">
    {{a}}
    <input type="text" v-model.number="age" @change="ageChange">
  </div>
</template>

<script>
import { mapState } from 'vuex'

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
    ...mapState({
      c: state => state.count,
      n: 'name',
      a (state) {
        return state.age === this.age ? this.age : state.age
      }
    }),
    ...mapState(['gender'])
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
