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
  }
})