<style lang="postcss" scoped>
.basic {
  display: flex;
  flex-basis: row;
}
.nav {
  position: fixed;
  top: 20px;
  left: 0;
  z-index: 100;
  height: 100%;
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
  margin-left: 150px;
}
</style>

<template>
  <div class="basic">
    <div class="nav">
      <router-link class="nav-item" to="/others/dialog">Dialog 对话框</router-link>
      <router-link class="nav-item" to="/others/tooltip">Tooltip 文字提示</router-link>
      <router-link class="nav-item" to="/others/popover">Popover 弹出框</router-link>
      <router-link class="nav-item" to="/others/card">Card 卡片</router-link>
      <router-link class="nav-item" to="/others/carousel">Carousel 走马灯</router-link>
      <router-link class="nav-item" to="/others/collapse">Collapse 折叠面板</router-link>
    </div>
    <router-view class="content"></router-view>
  </div>
</template>

<script>
export default {
  name: 'Others'
}
</script>
