<style scoped>
.basic {
  display: flex;
  flex-basis: row;
}
.nav {
  width: 150px;
  background-color: slategrey;
}
.nav-item {
  display: block;
  height: 50px;
  line-height: 50px;
}
.content {
  flex: auto;
}
</style>

<template>
  <div class="basic">
    <div class="nav">
      <router-link class="nav-item" to="/basic/layout">Layout 布局</router-link>
      <router-link class="nav-item" to="/basic/container">Container 布局容器</router-link>
      <router-link class="nav-item" to="/basic/color">Color 色彩</router-link>
      <router-link class="nav-item" to="/basic/typography">Typography 字体</router-link>
      <router-link class="nav-item" to="/basic/icon">Icon 图标</router-link>
      <router-link class="nav-item" to="/basic/button">Button 按钮</router-link>
    </div>
    <router-view class="content"></router-view>
  </div>
</template>

<script>

export default {
  name: 'Basic'
}
</script>
