import {
  createRouter,
  createWebHistory,
} from 'vue-router/dist/vue-router.esm-bundler';

import Home from './views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('./views/About.vue'),
  },
  {
    path: '/calc',
    name: 'Calculation',
    component: () => import('./views/Calculation.vue'),
  },
  {
    path: '/people',
    name: 'People',
    component: () => import('./views/People.vue'),
  },
  {
    path: '/breweries',
    name: 'Breweries',
    component: () => import('./views/Breweries.vue'),
  },
];

export default () =>
  createRouter({
    history: createWebHistory(),
    routes,
  });
