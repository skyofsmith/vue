<style lang="postcss" scoped>
</style>

<template>
  <div class="slider">
    <h1>slider</h1>
    <h4>basic</h4>
    <div class="basci">
      <div class="block">
        <span class="demonstration">默认</span>
        <el-slider v-model="value1"></el-slider>
      </div>
      <div class="block">
        <span class="demonstration">自定义初始值</span>
        <el-slider v-model="value2"></el-slider>
      </div>
      <div class="block">
        <span class="demonstration">隐藏 Tooltip</span>
        <el-slider v-model="value3" :show-tooltip="false"></el-slider>
      </div>
      <div class="block">
        <span class="demonstration">格式化 Tooltip</span>
        <el-slider v-model="value4" :format-tooltip="formatTooltip"></el-slider>
      </div>
      <div class="block">
        <span class="demonstration">禁用</span>
        <el-slider v-model="value5" disabled></el-slider>
      </div>
    </div>
    <h4>lisan</h4>
    <div class="lisan">
      <div class="block">
        <span class="demonstration">不显示间断点</span>
        <el-slider v-model="value6" :step="10"></el-slider>
      </div>
      <div class="block">
        <span class="demonstration">显示间断点</span>
        <el-slider v-model="value7" :step="10" show-stops></el-slider>
      </div>
    </div>
    <h4>with input</h4>
    <div class="with-input">
      <div class="block">
        <el-slider v-model="value8" show-input></el-slider>
      </div>
    </div>
    <h4>range</h4>
    <div class="range">
      <div class="block">
        <el-slider v-model="value9" range show-stops :max="10"></el-slider>
      </div>
    </div>
    <h4>vertical</h4>
    <div class="vertical">
      <div class="block">
        <el-slider v-model="value10" vertical height="200px"></el-slider>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Slider',
  data() {
    return {
      value1: 0,
      value2: 50,
      value3: 36,
      value4: 48,
      value5: 42,
      value6: 0,
      value7: 0,
      value8: 0,
      value9: [4, 8],
      value10: 0
    }
  },
  methods: {
    formatTooltip(val) {
      return val / 100
    }
  }
}
</script>
