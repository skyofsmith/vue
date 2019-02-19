<style>
html, body {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
.header {
  height: 80px;
  background-color: #379cf8;
}
.section {
  flex: 1;
  background-color: #ccc;
  display: flex;
  flex-direction: row;
  align-self: stretch;
}

.nav {
  width: 200px;
  align-self: stretch;
}

.content {
  flex: 1;
}
</style>

<template>
  <div id="app">
    <div class="header"></div>
    <div class="section">
      <Nav class="nav"></Nav>
      <router-view class="content"/>
    </div>
  </div>
</template>

<script>
import Nav from '@/views/Nav'
export default {
  name: 'App',
  components: {
    Nav
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
