<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <hr>
    <hr>
    <hr>
    <h1>DestructingReactive</h1>
    <DestructingReactive />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import DestructingReactive from './components/DestructingReactive'
export default {
  name: 'App',
  components: {
    DestructingReactive,
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
