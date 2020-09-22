import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/home',
      // name: 'home',
      // component: Home
    },

    {
      path: '/home',
      name: 'home',
      component: () => import(/* webpackChunkName: "about" */ './views/home/index.vue')
    },

    // {
    //   path: '/telegramas/imprimir',
    //   name: 'telegramas_imprimir',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './services/telegram/views/Print.vue')
    // },
  ]
})