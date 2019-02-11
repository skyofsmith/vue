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
      <router-link class="nav-item" to="/navigation/navmenu">NavMenu 导航菜单</router-link>
      <router-link class="nav-item" to="/navigation/loading">Tabs 标签页</router-link>
      <router-link class="nav-item" to="/navigation/message">Breadcrumb 面包屑</router-link>
      <router-link class="nav-item" to="/navigation/messagebox">Dropdown 下拉菜单</router-link>
      <router-link class="nav-item" to="/navigation/notification">Steps 步骤条</router-link>
    </div>
    <router-view class="content"></router-view>
  </div>
</template>

<script>
export default {
  name: "Navigation"
};
</script>
