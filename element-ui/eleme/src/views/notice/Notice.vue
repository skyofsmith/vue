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
      <router-link class="nav-item" to="/notice/alert">Alert 警告</router-link>
      <router-link class="nav-item" to="/notice/loading">Loading 加载</router-link>
      <router-link class="nav-item" to="/notice/message">Message 消息提示</router-link>
      <router-link class="nav-item" to="/notice/messagebox">MessageBox 弹框</router-link>
      <router-link class="nav-item" to="/notice/notification">Notification 通知</router-link>
    </div>
    <router-view class="content"></router-view>
  </div>
</template>

<script>
export default {
  name: 'Notice'
}
</script>
