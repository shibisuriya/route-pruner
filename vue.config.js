const { defineConfig } = require('@vue/cli-service')
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
  chainWebpack: config => {
    config.module
      .rule('route-pruner-rule')
      .test(/src\/router\/routes\.js$/)
      .use('route-pruner')
      .loader('./route-pruner.js')
      .end();
  }
})