<style scoped lang="stylus">
h3
  margin 40px 0 0

ul
  list-style-type none
  padding 0

li
  display inline-block
  margin 0 10px

a
  color #42b983

.content
  height: 200px
  overflow: auto

  >>> .el-scrollbar__wrap
    overflow-x: hidden
</style>

<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br />
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener"
        >vue-cli documentation</a
      >.
    </p>
    <div class="content">
      
    </div>
  </div>
</template>

<script>
export default {
  name: "B",
  props: {
    msg: String
  },
  mounted() {
    this.$bus.$on('toB', (data) => {
      console.log('b receive: ', data)
    });
  }
};
</script>
