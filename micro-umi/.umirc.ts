import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  qiankun: {
    slave: {},
  },
  base: "/Umi",
  // plugins: ['@umijs/plugin-qiankun'],
  routes: [
    // { path: '/Umi', microApp: 'UmiMicroApp' },
    { path: '/', component: '@/pages/index' },
  ],
  fastRefresh: {},
  devServer: {
    port: 9500,
    writeToDisk: true
  },
  cssLoader: {
    localsConvention: 'camelCase'
  },
});
