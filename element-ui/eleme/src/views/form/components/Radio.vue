<style lang="postcss" scoped>
</style>
<template>
  <div class="radio">
    <h1>radio</h1>
    <h4>basic</h4>
    <div class="basic">
      <el-radio v-model="radio" label="1">备选项</el-radio>
      <el-radio v-model="radio" label="2">备选项</el-radio>
    </div>
    <h4>disabled</h4>
    <div class="disabled">
      <el-radio disabled v-model="radio1" label="禁用">备选项</el-radio>
      <el-radio disabled v-model="radio1" label="选中且禁用">备选项</el-radio>
    </div>
    <h4>radio group</h4>
    <div class="radio-group">
      <el-radio-group v-model="radio2">
        <el-radio :label="3">备选项</el-radio>
        <el-radio :label="6">备选项</el-radio>
        <el-radio :label="9">备选项</el-radio>
      </el-radio-group>
    </div>
    <h4>button like</h4>
    <div class="button-like">
      <el-radio-group v-model="radio3">
        <el-radio-button label="上海"></el-radio-button>
        <el-radio-button label="北京"></el-radio-button>
        <el-radio-button label="广州"></el-radio-button>
        <el-radio-button label="深圳"></el-radio-button>
      </el-radio-group>
      <el-radio-group v-model="radio4" size="medium">
        <el-radio-button label="上海"></el-radio-button>
        <el-radio-button label="北京"></el-radio-button>
        <el-radio-button label="广州"></el-radio-button>
        <el-radio-button label="深圳"></el-radio-button>
      </el-radio-group>
      <el-radio-group v-model="radio5" size="small">
        <el-radio-button label="上海"></el-radio-button>
        <el-radio-button label="北京" disabled></el-radio-button>
        <el-radio-button label="广州"></el-radio-button>
        <el-radio-button label="深圳"></el-radio-button>
      </el-radio-group>
      <el-radio-group v-model="radio6" disabled size="mini">
        <el-radio-button label="上海"></el-radio-button>
        <el-radio-button label="北京"></el-radio-button>
        <el-radio-button label="广州"></el-radio-button>
        <el-radio-button label="深圳"></el-radio-button>
      </el-radio-group>
    </div>
    <h4>bordered</h4>
    <div class="bordered">
      <div>
        <el-radio v-model="radio7" label="1" border>备选项1</el-radio>
        <el-radio v-model="radio7" label="2" border>备选项2</el-radio>
      </div>
      <div style="margin-top: 20px">
        <el-radio v-model="radio8" label="1" border size="medium">备选项1</el-radio>
        <el-radio v-model="radio8" label="2" border size="medium">备选项2</el-radio>
      </div>
      <div style="margin-top: 20px">
        <el-radio-group v-model="radio9" size="small">
          <el-radio label="1" border>备选项1</el-radio>
          <el-radio label="2" border disabled>备选项2</el-radio>
        </el-radio-group>
      </div>
      <div style="margin-top: 20px">
        <el-radio-group v-model="radio10" size="mini" disabled>
          <el-radio label="1" border>备选项1</el-radio>
          <el-radio label="2" border>备选项2</el-radio>
        </el-radio-group>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Radio',
  data() {
    return {
      radio: '1',
      radio1: '选中且禁用',
      radio2: 3,
      radio3: '上海',
      radio4: '上海',
      radio5: '上海',
      radio6: '上海',
      radio7: '1',
      radio8: '1',
      radio9: '1',
      radio10: '1'
    }
  }
}
</script>
