const path = require("path");

module.exports = {
  css: {
    loaderOptions: {
      css: {
      },
      less:{
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
  },
  devServer: {
    port: 9001,
    open: true,
    disableHostCheck: true,
  },
};
