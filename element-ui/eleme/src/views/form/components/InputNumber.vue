<style lang="postcss">
#inputnumber.inputnumber .el-input-number {
  width: 200px;
}
</style>
<template>
  <div id="inputnumber" class="inputnumber">
    <h1>inputnumber</h1>
    <h4>basic</h4>
    <div class="basic">
      <el-input-number v-model="num1" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
    </div>
    <h4>disabled</h4>
    <div class="disabled">
      <el-input-number v-model="num2" :disabled="true"></el-input-number>
    </div>
    <h4>step</h4>
    <div class="step">
      <el-input-number v-model="num3" :step="2"></el-input-number>
    </div>
    <h4>precision</h4>
    <div class="precision">
      <el-input-number v-model="num9" :precision="2" :step="0.1" :max="10"></el-input-number>
    </div>
    <h4>size</h4>
    <div class="size">
      <el-input-number v-model="num4"></el-input-number>
      <el-input-number size="medium" v-model="num5"></el-input-number>
      <el-input-number size="small" v-model="num6"></el-input-number>
      <el-input-number size="mini" v-model="num7"></el-input-number>
    </div>
    <h4>button position</h4>
    <div class="btn-pos">
      <el-input-number v-model="num8" controls-position="right" @change="handleChange" :min="1" :max="10"></el-input-number>
    </div>
  </div>
</template>
<script>
export default {
  name: 'InputNumber',
  data() {
    return {
      num1: 1,
      num2: 1,
      num3: 5,
      num9: 1,
      num4: 1,
      num5: 1,
      num6: 1,
      num7: 1,
      num8: 1
    }
  },
  methods: {
    handleChange(value) {
      console.log(value)
    }
  }
}
</script>
