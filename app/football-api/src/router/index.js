import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    meta: { layout: 'main', auth: true },
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/leagues',
    name: 'leagues',
    meta: { layout: 'main', auth: true },
    component: () => import('../views/Leagues.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
