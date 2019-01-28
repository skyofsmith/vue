<style lang="postcss" scoped>
</style>
<template>
  <div class="datepicker">
    <h1>datepicker</h1>
    <h4>choose day</h4>
    <div class="day">
      <div class="block">
        <span class="demonstration">默认</span>
        <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
      </div>
      <div class="block">
        <span class="demonstration">带快捷选项</span>
        <el-date-picker
          v-model="value2"
          align="right"
          type="date"
          placeholder="选择日期"
          :picker-options="pickerOptions1"
        ></el-date-picker>
      </div>
    </div>
    <h4>other unit</h4>
    <div class="other-unit">
      <div class="block">
        <span class="demonstration">周</span>
        <el-date-picker v-model="value3" type="week" format="yyyy 第 WW 周" placeholder="选择周"></el-date-picker>
      </div>
      <div class="block">
        <span class="demonstration">月</span>
        <el-date-picker v-model="value4" type="month" placeholder="选择月"></el-date-picker>
      </div>
    </div>
    <div class="container">
      <div class="block">
        <span class="demonstration">年</span>
        <el-date-picker v-model="value5" type="year" placeholder="选择年"></el-date-picker>
      </div>
      <div class="block">
        <span class="demonstration">多个日期</span>
        <el-date-picker type="dates" v-model="value14" placeholder="选择一个或多个日期"></el-date-picker>
      </div>
    </div>
    <h4>range</h4>
    <div class="range">
      <div class="block">
        <span class="demonstration">默认</span>
        {{value6}}
        <el-date-picker
          v-model="value6"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        ></el-date-picker>
      </div>
      <div class="block">
        <span class="demonstration">带快捷选项</span>
        <el-date-picker
          v-model="value7"
          type="daterange"
          align="right"
          unlink-panels
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :picker-options="pickerOptions2"
        ></el-date-picker>
      </div>
    </div>
    <h4>format</h4>
    <div class="format">
      <div class="block">
        <span class="demonstration">默认为 Date 对象</span>
        <div class="demonstration">值：{{ value10 }}</div>
        <el-date-picker v-model="value10" type="date" placeholder="选择日期" format="yyyy 年 MM 月 dd 日"></el-date-picker>
      </div>
      <div class="block">
        <span class="demonstration">使用 value-format</span>
        <div class="demonstration">值：{{ value11 }}</div>
        <el-date-picker
          v-model="value11"
          type="date"
          placeholder="选择日期"
          format="yyyy 年 MM 月 dd 日"
          value-format="yyyy-MM-dd"
        ></el-date-picker>
      </div>
      <div class="block">
        <span class="demonstration">时间戳</span>
        <div class="demonstration">值：{{ value12 }}</div>
        <el-date-picker
          v-model="value12"
          type="date"
          placeholder="选择日期"
          format="yyyy 年 MM 月 dd 日"
          value-format="timestamp"
        ></el-date-picker>
      </div>
    </div>
    <h4>default</h4>
    <div class="default">
      <div class="block">
        <p>组件值：{{ value13 }}</p>
        <el-date-picker
          v-model="value13"
          type="daterange"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :default-time="['00:00:00', '23:59:59']"
        ></el-date-picker>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DatePicker',
  data() {
    return {
      value1: '',
      value2: '',
      value3: '',
      value4: '',
      value5: '',
      value14: '',
      value6: '',
      value7: '',
      value10: '',
      value11: '',
      value12: '',
      value13: ''
    }
  },
  computed: {
    pickerOptions1: {
      disabledDate(time) {
        return time.getTime() > Date.now()
      },
      shortcuts: [
        {
          text: '今天',
          onClick(picker) {
            picker.$emit('pick', new Date())
          }
        },
        {
          text: '昨天',
          onClick(picker) {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24)
            picker.$emit('pick', date)
          }
        },
        {
          text: '一周前',
          onClick(picker) {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', date)
          }
        }
      ]
    },
    pickerOptions2: {
      shortcuts: [
        {
          text: '最近一周',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', [start, end])
          }
        },
        {
          text: '最近一个月',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            picker.$emit('pick', [start, end])
          }
        },
        {
          text: '最近三个月',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            picker.$emit('pick', [start, end])
          }
        }
      ]
    }
  }
}
</script>
