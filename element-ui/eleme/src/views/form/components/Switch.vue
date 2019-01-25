
<style lang="postcss" scoped>

</style>

<template>
  <div class="switch">
    <h1>switch</h1>
    <h4>basic</h4>
    <div class="basic">
      <el-switch
        v-model="value2"
        active-color="#13ce66"
        inactive-color="#ff4949">
      </el-switch>
    </div>
    <h4>test desc</h4>
    <div class="text-desc">
      <el-switch
        v-model="value3"
        active-text="按月付费"
        inactive-text="按年付费">
      </el-switch>
      <el-switch
        style="display: block"
        v-model="value4"
        active-color="#13ce66"
        inactive-color="#ff4949"
        active-text="按月付费"
        inactive-text="按年付费">
      </el-switch>
    </div>
    <h4>diff value</h4>
    <div class="diff-value">
      <el-tooltip :content="'Switch value: ' + value5" placement="top">
        <el-switch
          v-model="value5"
          active-color="#13ce66"
          inactive-color="#ff4949"
          active-value="100"
          inactive-value="0">
        </el-switch>
      </el-tooltip>
    </div>
    <h4>disabled</h4>
    <div class="disabled">
      <el-switch
        v-model="value6"
        disabled>
      </el-switch>
      <el-switch
        v-model="value7"
        disabled>
      </el-switch>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Switch',
  data () {
    return {
      value1: true,
      value2: true,
      value3: true,
      value4: true,
      value5: '100',
      value6: true,
      value7: false
    }
  }
}
</script>
