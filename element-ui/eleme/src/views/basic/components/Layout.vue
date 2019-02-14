<style lang="postcss">
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
  line-height: 36px;
  font-size: 24px;
  text-align: center;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.gutter,
.mix,
.offset,
.justify,
.responsive {
  overflow: hidden;
}
</style>

<template>
  <div>
    <h1>layout</h1>
    <h4>base</h4>
    <div class="base">
      <el-row>
        <el-col :span="24">
          <div class="grid-content bg-purple-dark">24</div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <div class="grid-content bg-purple">12</div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content bg-purple-light">12</div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <div class="grid-content bg-purple">8</div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple-light">8</div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple">8</div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6">
          <div class="grid-content bg-purple">6</div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple-light">6</div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">6</div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple-light">6</div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="4">
          <div class="grid-content bg-purple">4</div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple-light">4</div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple">4</div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple-light">4</div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple">4</div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple-light">4</div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="3">
          <div class="grid-content bg-purple">3</div>
        </el-col>
        <el-col :span="3">
          <div class="grid-content bg-purple-light">3</div>
        </el-col>
        <el-col :span="3">
          <div class="grid-content bg-purple">3</div>
        </el-col>
        <el-col :span="3">
          <div class="grid-content bg-purple-light">3</div>
        </el-col>
        <el-col :span="3">
          <div class="grid-content bg-purple">3</div>
        </el-col>
        <el-col :span="3">
          <div class="grid-content bg-purple-light">3</div>
        </el-col>
        <el-col :span="3">
          <div class="grid-content bg-purple">3</div>
        </el-col>
        <el-col :span="3">
          <div class="grid-content bg-purple-light">3</div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="2">
          <div class="grid-content bg-purple">2</div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content bg-purple-light">2</div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content bg-purple">2</div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content bg-purple-light">2</div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content bg-purple">2</div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content bg-purple-light">2</div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content bg-purple">2</div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content bg-purple-light">2</div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content bg-purple">2</div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content bg-purple-light">2</div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content bg-purple">2</div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content bg-purple-light">2</div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="1">
          <div class="grid-content bg-purple">1</div>
        </el-col>
        <el-col :span="1">
          <div class="grid-content bg-purple-light">1</div>
        </el-col>
        <el-col :span="1">
          <div class="grid-content bg-purple">1</div>
        </el-col>
        <el-col :span="1">
          <div class="grid-content bg-purple-light">1</div>
        </el-col>
        <el-col :span="1">
          <div class="grid-content bg-purple">1</div>
        </el-col>
        <el-col :span="1">
          <div class="grid-content bg-purple-light">1</div>
        </el-col>
        <el-col :span="1">
          <div class="grid-content bg-purple">1</div>
        </el-col>
        <el-col :span="1">
          <div class="grid-content bg-purple-light">1</div>
        </el-col>
        <el-col :span="1">
          <div class="grid-content bg-purple">1</div>
        </el-col>
        <el-col :span="1">
          <div class="grid-content bg-purple-light">1</div>
        </el-col>
        <el-col :span="1">
          <div class="grid-content bg-purple">1</div>
        </el-col>
        <el-col :span="1">
          <div class="grid-content bg-purple-light">1</div>
        </el-col>
        <el-col :span="1">
          <div class="grid-content bg-purple">1</div>
        </el-col>
        <el-col :span="1">
          <div class="grid-content bg-purple-light">1</div>
        </el-col>
        <el-col :span="1">
          <div class="grid-content bg-purple">1</div>
        </el-col>
        <el-col :span="1">
          <div class="grid-content bg-purple-light">1</div>
        </el-col>
        <el-col :span="1">
          <div class="grid-content bg-purple">1</div>
        </el-col>
        <el-col :span="1">
          <div class="grid-content bg-purple-light">1</div>
        </el-col>
        <el-col :span="1">
          <div class="grid-content bg-purple-">1</div>
        </el-col>
        <el-col :span="1">
          <div class="grid-content bg-purple-light">1</div>
        </el-col>
        <el-col :span="1">
          <div class="grid-content bg-purple">1</div>
        </el-col>
        <el-col :span="1">
          <div class="grid-content bg-purple-light">1</div>
        </el-col>
        <el-col :span="1">
          <div class="grid-content bg-purple">1</div>
        </el-col>
        <el-col :span="1">
          <div class="grid-content bg-purple-light">1</div>
        </el-col>
      </el-row>
    </div>
    <h4>gutter</h4>
    <div class="gutter">
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple"></div>
        </el-col>
      </el-row>
    </div>
    <h4>mix layout</h4>
    <div class="mix">
      <el-row :gutter="20">
        <el-col :span="16">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple"></div>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="8">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple"></div>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="4">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="16">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple"></div>
        </el-col>
      </el-row>
    </div>
    <h4>offset</h4>
    <div class="offset">
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="6" :offset="6">
          <div class="grid-content bg-purple">offset=6</div>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="6" :offset="6">
          <div class="grid-content bg-purple">offset=6</div>
        </el-col>
        <el-col :span="6" :offset="6">
          <div class="grid-content bg-purple">offset=6</div>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12" :offset="6">
          <div class="grid-content bg-purple">offset=6</div>
        </el-col>
      </el-row>
    </div>
    <h4>justify</h4>
    <div class="justify">
      <el-row type="flex" class="row-bg">
        <el-col :span="6">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple-light"></div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple"></div>
        </el-col>
      </el-row>
      <el-row type="flex" class="row-bg" justify="center">
        <el-col :span="6">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple-light"></div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple"></div>
        </el-col>
      </el-row>
      <el-row type="flex" class="row-bg" justify="end">
        <el-col :span="6">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple-light"></div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple"></div>
        </el-col>
      </el-row>
      <el-row type="flex" class="row-bg" justify="space-between">
        <el-col :span="6">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple-light"></div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple"></div>
        </el-col>
      </el-row>
      <el-row type="flex" class="row-bg" justify="space-around">
        <el-col :span="6">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple-light"></div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple"></div>
        </el-col>
      </el-row>
    </div>
    <h4>responsive</h4>
    <div class="responsive">
      <el-row :gutter="10">
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
          <div class="grid-content bg-purple-light"></div>
        </el-col>
        <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
          <div class="grid-content bg-purple-light"></div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Layout',
  data() {
    return {}
  }
}
</script>
