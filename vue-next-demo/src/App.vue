<template>
  <div id="app">
    <Basic/>
  </div>
</template>

<script>
import Basic from './components/Basic'

export default {
  name: 'App',
  components: {
    Basic
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
}
</style>
