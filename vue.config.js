const { defineConfig } = require('@vue/cli-service')
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin') // 显示编译时长
const es3ifyPlugin = require('es3ify-webpack-plugin'); //支持ES3
module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: false,
  publicPath: '/',
  indexPath: "index.html",
  filenameHashing: true,
  outputDir: 'webpack-builds',
  assetsDir: 'assets',
  // 开发服务器
  devServer: {
    host: '127.0.0.1',
    port: 8090,
    https: false,
    open: true,
    proxy: {
      // 匹配访问路径中含有 '/api' 的路径
      '/api': {
        target: 'http://127.0.0.1:8080/', // 测试地址、目标地址
        changeOrigin: true, // 改变origin
        ws: true, // 是否开启 webSocket 代理
        pathRewrite: { // 请求路径重写
          '^/api': '',   //重写请求路径 api转为空
        },
      }
    }
  },
  configureWebpack: {
    plugins: [
      new SpeedMeasurePlugin(),
      new es3ifyPlugin()
    ]
  }
})
