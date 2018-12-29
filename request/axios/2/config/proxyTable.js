module.exports = {
  'api': {
    target: 'http://api.douban.com/v2/movie/top250',
    changeOrigin: true,
    pathRewrite: {
      '^/api': ''
    }
  }
}
