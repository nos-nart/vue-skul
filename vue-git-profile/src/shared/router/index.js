import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

/* eslint-disable */
const Home = () => import('@/components/Home');
const NotFoundPage = () => import ('@/components/NotFoundPage');

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '*',
    name: 'Not Found',
    component: NotFoundPage,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
