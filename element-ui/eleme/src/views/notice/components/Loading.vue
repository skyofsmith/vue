<style>
</style>

<template>
  <div class="loading">
    <h1>loading</h1>
    <h4>block</h4>
    <div class="block">
      <el-table v-loading="loading" :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="日期" width="180"></el-table-column>
        <el-table-column prop="name" label="姓名" width="180"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
      </el-table>
    </div>
    <h4>custom</h4>
    <div class="custom">
      <el-table
        v-loading="loading2"
        element-loading-text="拼命加载中"
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(0, 0, 0, 0.8)"
        :data="tableData"
        style="width: 100%"
      >
        <el-table-column prop="date" label="日期" width="180"></el-table-column>
        <el-table-column prop="name" label="姓名" width="180"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
      </el-table>
    </div>
    <h4>total page</h4>
    <div class="total-page">
      <el-button
        type="primary"
        @click="openFullScreen"
        v-loading.fullscreen.lock="fullscreenLoading"
      >指令方式</el-button>
      <el-button type="primary" @click="openFullScreen2">服务方式</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Loading',
  data() {
    return {
      tableData: [
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }
      ],
      loading: true,
      loading2: true,
      fullscreenLoading: false
    }
  },
  methods: {
    openFullScreen() {
      this.fullscreenLoading = true
      setTimeout(() => {
        this.fullscreenLoading = false
      }, 2000)
    },
    openFullScreen2() {
      const loading = this.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      })
      setTimeout(() => {
        loading.close()
      }, 2000)
    }
  }
}
</script>
