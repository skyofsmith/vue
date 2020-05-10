<style>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}
#nav {
  height: 20px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  background-color: darkkhaki;
}
#content {
  height: calc(100% - 20px);
  margin-top: 20px;
}
</style>
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/basic">Basic</router-link> |
      <router-link to="/form">Form</router-link> |
      <router-link to="/data">Data</router-link> |
      <router-link to="/notice">Notice</router-link> |
      <router-link to="/navigation">Navigation</router-link> |
      <router-link to="/others">Others</router-link> |
      <router-link to="/test">Test</router-link>
    </div>
    <router-view id="content"/>
  </div>
</template>