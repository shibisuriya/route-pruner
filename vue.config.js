const { defineConfig } = require('@vue/cli-service')
const QuickServePlugin = require('./quickServePlugin.js');
module.exports = defineConfig({
  lintOnSave: 'default',
  devServer: {
    port: 8080,
    hot: true,
    devMiddleware: {
      writeToDisk: true,
    },
    client: {
      overlay: {
        warnings: false,
        errors: true,
      },
    },
  },
  configureWebpack: {
    plugins: [
      new QuickServePlugin()
    ]
  }
})