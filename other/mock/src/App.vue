<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
import axios from 'axios'
const weatherUrl = 'https://www.apiopen.top/weatherApi'
export default {
  name: 'App',
  created () {
    axios.get(weatherUrl + '?city=西安').then(res => {
      console.log(res)
    })
    axios.post('action.ashx').then(res => {
      console.log(res)
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
