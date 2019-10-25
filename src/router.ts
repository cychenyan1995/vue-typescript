import Vue from 'vue';
import Router from 'vue-router';
import Today from './views/Today/Today.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'today',
      meta: {main: true},
      component: Today,
    },
    {
      path: '/habit',
      name: 'habit',
      meta: {main: true},
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Habit/Habit.vue'),
    },
    {
      path: '/new',
      name: '新建习惯',
      component: () => import('./views/New/New.vue'),
      children: [{
        path: 'library',
        name: '习惯分类',
        component: () => import('./views/New/Library.vue'),
        meta: {title: '习惯'}
      },{
        path: 'habit',
        name: '新建习惯',
        component: () => import('./views/New/Habit.vue'),
        meta: {title: '习惯'}
      },{
        path: 'iconSetting',
        name: '设置icon',
        component: () => import('./views/New/IconSetting.vue'),
        meta: {title: '图标设置'}
      }]
    }
  ],
});
