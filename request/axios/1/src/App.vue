<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <hr>
    <UseCreate></UseCreate>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import UseCreate from './components/useCreate.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    UseCreate
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
