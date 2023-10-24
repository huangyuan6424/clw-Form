import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  antd: {
    dark: false,
    compact: true,
  },
  dva: {
    immer: true,
    hmr: false,
  },
  routes: [
    // { path: '/', component: '@/pages/index' },
    { path: '/', component: '@/pages/FormTest' },
    { path: '/dvaTest', component: '@/pages/DvaTest' },
  ],
  fastRefresh: {},
});
