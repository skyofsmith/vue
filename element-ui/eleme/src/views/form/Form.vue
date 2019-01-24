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
      <router-link class="nav-item" to="/form/select">Select 选择器</router-link>
      <router-link class="nav-item" to="/form/cascader">Cascader 级联选择器</router-link>
      <router-link class="nav-item" to="/form/switch">Switch 开关</router-link>
      <router-link class="nav-item" to="/form/slider">Slider 滑块</router-link>
      <router-link class="nav-item" to="/form/timepicker">TimePicker 时间选择器</router-link>
      <router-link class="nav-item" to="/form/datepicker">DatePicker 日期选择器</router-link>
      <router-link class="nav-item" to="/form/datetimepicker">DateTimePicker 日期时间选择器</router-link>
      <router-link class="nav-item" to="/form/upload">Upload 上传</router-link>
      <router-link class="nav-item" to="/form/rate">Rate 评分</router-link>
      <router-link class="nav-item" to="/form/colorpicker">ColorPicker 颜色选择器</router-link>
      <router-link class="nav-item" to="/form/transfer">Transfer 穿梭框</router-link>
      <router-link class="nav-item" to="/form/form">Form 表单</router-link>
    </div>
    <router-view class="content"></router-view>
  </div>
</template>

<script>
export default {
  name: "Form"
};
</script>
