const routes = [
  {
    path: '/',
    name: 'home',
    meta: { layout: 'main', auth: true },
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/leagues/:id',
    name: 'leagues',
    meta: { layout: 'main', auth: true },
    component: () => import('../views/Leagues.vue'),
  },
];

export default routes;
