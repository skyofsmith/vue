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
      <router-link class="nav-item" to="/form/radio">Radio 单选框</router-link>
      <router-link class="nav-item" to="/form/checkbox">Checkbox 多选框</router-link>
      <router-link class="nav-item" to="/form/input">Input 输入框</router-link>
      <router-link class="nav-item" to="/form/inputnumber">InputNumber 计数器</router-link>
      <router-link class="nav-item" to="/form/radio">Select 选择器</router-link>
      <router-link class="nav-item" to="/form/radio">Cascader 级联选择器</router-link>
      <router-link class="nav-item" to="/form/radio">Switch 开关</router-link>
      <router-link class="nav-item" to="/form/radio">Slider 滑块</router-link>
      <router-link class="nav-item" to="/form/radio">TimePicker 时间选择器</router-link>
      <router-link class="nav-item" to="/form/radio">DatePicker 日期选择器</router-link>
      <router-link class="nav-item" to="/form/radio">DateTimePicker 日期时间选择器</router-link>
      <router-link class="nav-item" to="/form/radio">Upload 上传</router-link>
      <router-link class="nav-item" to="/form/radio">Rate 评分</router-link>
      <router-link class="nav-item" to="/form/radio">ColorPicker 颜色选择器</router-link>
      <router-link class="nav-item" to="/form/radio">Transfer 穿梭框</router-link>
      <router-link class="nav-item" to="/form/radio">Form 表单</router-link>
    </div>
    <router-view class="content"></router-view>
  </div>
</template>

<script>
export default {
  name: "Form"
};
</script>
