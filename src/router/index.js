import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
import HomeView from '../views/HomeView.vue'

export const constantRoutes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  // { path: '/redirect', component: Layout, hidden: true, children: [{ path: '/redirect/:path(.*)', component: () => import('@/views/constantRoutes/redirect') }] },
  // { path: '/login', component: () => import('@/views/constantRoutes/login'), hidden: true },
  // { path: '/register', component: () => import('@/views/constantRoutes/register'), hidden: true },
  // { path: '/404', component: () => import('@/views/constantRoutes/404'), hidden: true },
  // { path: '/401', component: () => import('@/views/constantRoutes/401'), hidden: true },
  // {
  //   path: '', component: Layout, redirect: 'index', children: [
  //     { path: 'index', component: () => import('@/views/constantRoutes/index'), name: 'Index', meta: { title: '首页', icon: 'dashboard', affix: false, keepAlive: true, } }
  //   ]
  // },
  // {
  //   path: '/user', component: Layout, redirect: 'noredirect', hidden: false, children: [
  //     // { path: 'profile', component: () => import('@/views/constantRoutes/profile/index'), hidden: false, name: 'Profile', meta: { title: '个人中心', icon: 'user' } }
  //   ]
  // },
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  // base: import.meta.env.BASE_URL,
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes,
});

export default router;