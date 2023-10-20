import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  antd: {
    dark: false,
    compact: true,
  },
  routes: [
    // { path: '/', component: '@/pages/index' },
    { path: '/', component: '@/pages/FormTest' },
  ],
  fastRefresh: {},
});
