module.exports = {
  devServer: {
    port: 7046
  },
  css: {
    loaderOptions: {
      sass: {
        data: '@import "@/assets/scss/_global.scss";'
      }
    }
  }
}
