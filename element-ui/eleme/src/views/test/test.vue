<template>
  <div class="czec-img-scroll">
    <el-carousel :interval="5000" arrow="always" class="carousel">
      <el-carousel-item :key="i" v-for="(name, i) in imgList" class="item">
        <img :src="'img/scroll/' + name" :alt="i" class="img" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>

export default {
  name: 'Test',
  data() {
    return {
      imgList: [
        'pic1.jpg',
        'pic2.jpg',
        'pic3.jpg'
      ]
    }
  },
  created() {
    this.getConfig()
  },
  methods: {
    getConfig() {
      fetch('public/img/scroll/config.json').then(res => {
        if (res && res.imgList) {
          this.imgList = res.imgList
        }
      })
    }
  }
}
</script>

<style lang="postcss" scoped>
.czec-img-scroll {
  height: 100%;
  width: 100%;

  .carousel {
    height: 100%;
    width: 100%;

    .item {

      .img {
        height: 100%;
        width: 100%;
      }
    }
  }
}
</style>
