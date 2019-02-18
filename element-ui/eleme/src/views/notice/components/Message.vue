<style>
</style>
<template>
  <div class="message">
    <h1>message</h1>
    <h4>basic</h4>
    <div class="basic">
      <el-button :plain="true" @click="open">打开消息提示</el-button>
      <el-button :plain="true" @click="openVn">VNode</el-button>
    </div>
    <h4>diff type</h4>
    <div class="diff-type">
      <el-button :plain="true" @click="open2">成功</el-button>
      <el-button :plain="true" @click="open3">警告</el-button>
      <el-button :plain="true" @click="open">消息</el-button>
      <el-button :plain="true" @click="open4">错误</el-button>
    </div>
    <h4>closable</h4>
    <div class="closable">
      <el-button :plain="true" @click="open5">消息</el-button>
      <el-button :plain="true" @click="open6">成功</el-button>
      <el-button :plain="true" @click="open7">警告</el-button>
      <el-button :plain="true" @click="open8">错误</el-button>
    </div>
    <h4>center</h4>
    <div class="center">
      <el-button :plain="true" @click="openCenter">文字居中</el-button>
    </div>
    <h4>use html</h4>
    <div class="use-html">
      <el-button :plain="true" @click="openHTML">使用 HTML 片段</el-button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Message',
  data() {
    return {}
  },
  methods: {
    open() {
      this.$message('这是一条消息提示')
    },

    openVn() {
      const h = this.$createElement
      this.$message({
        message: h('p', null, [h('span', null, '内容可以是 '), h('i', { style: 'color: teal' }, 'VNode')])
      })
    },
    open2() {
      this.$message({
        message: '恭喜你，这是一条成功消息',
        type: 'success'
      })
    },
    open3() {
      this.$message({
        message: '警告哦，这是一条警告消息',
        type: 'warning'
      })
    },
    open4() {
      this.$message.error('错了哦，这是一条错误消息')
    },
    open5() {
      this.$message({
        showClose: true,
        message: '这是一条消息提示'
      })
    },
    open6() {
      this.$message({
        showClose: true,
        message: '恭喜你，这是一条成功消息',
        type: 'success'
      })
    },
    open7() {
      this.$message({
        showClose: true,
        message: '警告哦，这是一条警告消息',
        type: 'warning'
      })
    },
    open8() {
      this.$message({
        showClose: true,
        message: '错了哦，这是一条错误消息',
        type: 'error'
      })
    },
    openCenter() {
      this.$message({
        message: '居中的文字',
        center: true
      })
    },
    openHTML() {
      this.$message({
        dangerouslyUseHTMLString: true,
        message: '<strong>这是 <i>HTML</i> 片段</strong>'
      })
    }
  }
}
</script>
