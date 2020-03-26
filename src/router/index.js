import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);
const routes = [
  {
    path: '/',
    name: 'threeMap',
    component: r => require.ensure([], () => r(require('../components/threeMap/fac')), 'threeMap'),
    meta: {
      title: '三维地图'
    }
  },
  {
    path: '/street',
    name: 'street',
    component: r => require.ensure([], () => r(require('../components/threeMap/street.vue')), 'street'),
    meta: {
      title: '三维街道'
    }
  },
  {
    path: '/fac',
    name: 'fac',
    component: r => require.ensure([], () => r(require('../components/threeMap/fac.vue')), 'fac'),
    meta: {
      title: '三维街道'
    }
  },
  {
    path: '/alarmPage',
    name: 'alarmPage',
    component: r => require.ensure([], () => r(require('../components/alarmPage/alarmPage')), 'alarmPage'),
  },
];
const router = new Router({
  routes,
  mode: 'hash',
  linkActiveClass: 'active-link',
  linkExactiveClass: 'exact-active-link'
});
export default router;

