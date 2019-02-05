<style scoped>
</style>
<template>
  <div class="progress">
    <h1>Progress</h1>
    <h4>percent out</h4>
    <div class="percent-out">
      <el-progress :percentage="0"></el-progress>
      <el-progress :percentage="70"></el-progress>
      <el-progress :percentage="80" color="#8e71c7"></el-progress>
      <el-progress :percentage="100" status="success"></el-progress>
      <el-progress :percentage="50" status="exception"></el-progress>
    </div>
    <h4>percent in</h4>
    <div class="percent-in">
      <el-progress :text-inside="true" :stroke-width="18" :percentage="0"></el-progress>
      <el-progress :text-inside="true" :stroke-width="18" :percentage="70"></el-progress>
      <el-progress
        :text-inside="true"
        :stroke-width="18"
        :percentage="80"
        color="rgba(142, 113, 199, 0.7)"
      ></el-progress>
      <el-progress :text-inside="true" :stroke-width="18" :percentage="100" status="success"></el-progress>
      <el-progress :text-inside="true" :stroke-width="18" :percentage="50" status="exception"></el-progress>
    </div>
    <h4>circle</h4>
    <div class="circle">
      <el-progress type="circle" :percentage="0"></el-progress>
      <el-progress type="circle" :percentage="25"></el-progress>
      <el-progress type="circle" :percentage="80" color="#8e71c7"></el-progress>
      <el-progress type="circle" :percentage="100" status="success"></el-progress>
      <el-progress type="circle" :percentage="50" status="exception"></el-progress>
      <el-progress type="circle" :percentage="100" status="text">Done</el-progress>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Progress',
  data() {
    return {}
  }
}
</script>
