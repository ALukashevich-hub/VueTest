import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/contacts',
    name: 'Contacts',

    // route level code-splitting
    // this generates a separate chunk (Contacts.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component() {
      return import(/* webpackChunkName: "Contacts" */ '../views/Contacts.vue');
    },
  },
  {
    path: '/catalog',
    name: 'Catalog',
    // route level code-splitting
    // this generates a separate chunk (Catalog.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component() {
      return import(/* webpackChunkName: "Catalog" */ '../views/Catalog.vue');
    },
  },
  {
    path: '/catalog/:nameCategory',
    name: 'ListProduct',
    // route level code-splitting
    // this generates a separate chunk (ListProduct.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component() {
      return import(/* webpackChunkName: "Specific" */ '../views/ListProduct.vue');
    },
  },
  {
    path: '/catalog/:nameCategory/:idProduct',
    name: 'SpecificPage',
    // route level code-splitting
    // this generates a separate chunk (Specific.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component() {
      return import(/* webpackChunkName: "Specific" */ '../views/Specific.vue');
    },
  },
  {
    path: '*',
    name: 'NotFoundComponent',
    component() {
      return import(/* webpackChunkName: "NotFoundComponent" */ '../views/NotFoundComponent.vue');
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
