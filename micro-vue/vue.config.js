const path = require("path");

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    output: {
      // 微应用的包名，这里与主应用中注册的微应用名称一致
      library: "VueMicroApp",
      // 将你的 library 暴露为所有的模块定义下都可运行的方式
      libraryTarget: 'umd',
      // 按需加载相关，设置为 webpackJsonp_VueMicroApp 即可
      jsonpFunction: `webpackJsonp_VueMicroApp`,
    }
  },
  devServer: {
    port: 9100,
    // 关闭主机检查，使微应用可以被 fetch
    disableHostCheck: true,
    open: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
};
