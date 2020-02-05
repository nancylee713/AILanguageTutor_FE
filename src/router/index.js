import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Grammar from '../components/Grammar.vue';
import FlashCards from '../views/FlashCards.vue';
import User from '../components/User.vue';
import CreateUser from '../views/CreateUser.vue';
import LoginForm from '../components/LoginForm'
import AccountOverview from '../components/AccountOverview'


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
    path: '/flashcards',
    name: 'flashcards',
    component: FlashCards,
  },
  {
    path: '/user/:id',
    name: 'user',
    component: User,
  },
  {
    path: '/create_user',
    name: 'create_user',
    component: CreateUser,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginForm,
  },
  {
    path: '/account',
    name: 'account_overview',
    component: AccountOverview

  }
];

const router = new VueRouter({
  routes,
});

export default router;
