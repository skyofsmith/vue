<style lang="postcss">
</style>
<template>
  <div class="colorpicker">
    <h4>colorpicker</h4>
    <h4>basic</h4>
    <div class="basic">
      <div class="block">
        <span class="demonstration">有默认值</span>
        <el-color-picker v-model="color1"></el-color-picker>
      </div>
      <div class="block">
        <span class="demonstration">无默认值</span>
        <el-color-picker v-model="color2"></el-color-picker>
      </div>
    </div>
    <h4>opacity</h4>
    <div class="opacity">
      <el-color-picker v-model="color3" show-alpha></el-color-picker>
    </div>
    <h4>predefine color</h4>
    <div class="predefine">
      <el-color-picker v-model="color5" show-alpha :predefine="predefineColors"></el-color-picker>
    </div>
    <h4>diff size</h4>
    <div class="diff-size">
      <el-color-picker v-model="color4"></el-color-picker>
      <el-color-picker v-model="color4" size="medium"></el-color-picker>
      <el-color-picker v-model="color4" size="small"></el-color-picker>
      <el-color-picker v-model="color4" size="mini"></el-color-picker>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Input',
  data() {
    return {
      color1: '#409EFF',
      color2: null,
      color3: 'rgba(19, 206, 102, 0.8)',
      color5: 'rgba(255, 69, 0, 0.68)',
      predefineColors: [
        '#ff4500',
        '#ff8c00',
        '#ffd700',
        '#90ee90',
        '#00ced1',
        '#1e90ff',
        '#c71585',
        'rgba(255, 69, 0, 0.68)',
        'rgb(255, 120, 0)',
        'hsv(51, 100, 98)',
        'hsva(120, 40, 94, 0.5)',
        'hsl(181, 100%, 37%)',
        'hsla(209, 100%, 56%, 0.73)',
        '#c7158577'
      ],
      color4: '#409EFF'
    }
  },
  methods: {},
  mounted() {}
}
</script>
