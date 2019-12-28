import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Grammar from '../components/Grammar.vue';
import Pronunciation from '../components/Pronunciation.vue';
import User from '../components/User.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/grammar',
    name: 'grammar',
    component: Grammar,
  },
  {
    path: '/pronunciation',
    name: 'pronunciation',
    component: Pronunciation,
  },
  {
    path: '/user/:id',
    name: 'user',
    component: User,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
