<style>
</style>

<template>
  <div class="alert">
    <h1>alert</h1>
    <h4>basic</h4>
    <div class="basic">
      <el-alert title="成功提示的文案" type="success"></el-alert>
      <el-alert title="消息提示的文案" type="info"></el-alert>
      <el-alert title="警告提示的文案" type="warning"></el-alert>
      <el-alert title="错误提示的文案" type="error"></el-alert>
    </div>
    <h4>custom close</h4>
    <div class="custom-close">
      <el-alert title="不可关闭的 alert" type="success" :closable="false"></el-alert>
      <el-alert title="自定义 close-text" type="info" close-text="知道了"></el-alert>
      <el-alert title="设置了回调的 alert" type="warning" @close="hello"></el-alert>
    </div>
    <h4>with icon</h4>
    <div class="with-icon">
      <el-alert title="成功提示的文案" type="success" show-icon></el-alert>
      <el-alert title="消息提示的文案" type="info" show-icon></el-alert>
      <el-alert title="警告提示的文案" type="warning" show-icon></el-alert>
      <el-alert title="错误提示的文案" type="error" show-icon></el-alert>
    </div>
    <h4>center</h4>
    <div class="center">
      <el-alert title="成功提示的文案" type="success" center show-icon></el-alert>
      <el-alert title="消息提示的文案" type="info" center show-icon></el-alert>
      <el-alert title="警告提示的文案" type="warning" center show-icon></el-alert>
      <el-alert title="错误提示的文案" type="error" center show-icon></el-alert>
    </div>
    <h4>description</h4>
    <div class="description">
      <el-alert
        title="带辅助性文字介绍"
        type="success"
        description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……"
      ></el-alert>
    </div>
    <h4>icon and description</h4>
    <div class="icon-description">
      <el-alert title="成功提示的文案" type="success" description="文字说明文字说明文字说明文字说明文字说明文字说明" show-icon></el-alert>
      <el-alert title="消息提示的文案" type="info" description="文字说明文字说明文字说明文字说明文字说明文字说明" show-icon></el-alert>
      <el-alert title="警告提示的文案" type="warning" description="文字说明文字说明文字说明文字说明文字说明文字说明" show-icon></el-alert>
      <el-alert title="错误提示的文案" type="error" description="文字说明文字说明文字说明文字说明文字说明文字说明" show-icon></el-alert>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Alert',
  data() {
    return {}
  },
  methods: {
    hello() {
      alert('Hello World!')
    }
  }
}
</script>
