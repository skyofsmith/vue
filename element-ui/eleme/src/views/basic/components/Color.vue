<style scoped>
.color {
  font-size: 24px;
}
.color-block {
  width: 300px;
  height: 100px;
}
.main {
  background-color: #409eff;
}
.subs {
  display: flex;
}
.subs > * {
  flex-grow: 1;
  line-height: 100px;
  text-align: center;
}
.sub1 {
  background-color: #67c23a;
}
.sub2 {
  background-color: #e6a23c;
}
.sub3 {
  background-color: #f56c6c;
}
.sub4 {
  background-color: #909399;
}
.middle {
  display: flex;
}
.texts {
  flex: 1;
}
.text1 {
  color: #303133;
}
.text2 {
  color: #606266;
}
.text3 {
  color: #909399;
}
.text4 {
  color: #C0C4CC;
}
.borders {
  flex: 1;
}
.border1 {
  background-color: #DCDFE6;
}
.border2 {
  background-color: #E4E7ED;
}
.border3 {
  background-color: #EBEEF5;
}
.border4 {
  background-color: #F2F6FC;
}
</style>

<template>
  <div class="color">
    <h1>color</h1>
    <h4>main color</h4>
    <div class="color-block main">main color</div>
    <h4>sub color</h4>
    <div class="subs">
      <div class="color-block sub1">sub1 color</div>
      <div class="color-block sub2">sub2 color</div>
      <div class="color-block sub3">sub3 color</div>
      <div class="color-block sub4">sub4 color</div>
    </div>
    <h4>middle color</h4>
    <div class="middle">
      <div class="texts">
        <div class="text text1">main text</div>
        <div class="text text2">regular text</div>
        <div class="text text3">sub text</div>
        <div class="text text4">place text</div>
      </div>
      <div class="borders">
        <div class="border1">一级边框</div>
        <div class="border2">二级边框</div>
        <div class="border3">三级边框</div>
        <div class="border4">四级边框</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
