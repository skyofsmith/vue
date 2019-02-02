<style scoped>
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
      <router-link class="nav-item" to="/data/table">Table 表格</router-link>
      <router-link class="nav-item" to="/data/tag">Tag 标签</router-link>
      <router-link class="nav-item" to="/data/progress">Progress 进度条</router-link>
      <router-link class="nav-item" to="/data/tree">Tree 树形控件</router-link>
      <router-link class="nav-item" to="/data/pagination">Pagination 分页</router-link>
      <router-link class="nav-item" to="/data/badge">Badge 标记</router-link>
    </div>
    <router-view class="content"></router-view>
  </div>
</template>

<script>
export default {
  name: "Data"
};
</script>
