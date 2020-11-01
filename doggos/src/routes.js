import { createWebHistory, createRouter } from 'vue-router';
import App from './App.vue';
import Discover from './components/Discover/Discover.vue';
import Favorite from './components/Favorite/Favorite.vue';
import History from './components/History/History.vue';


const routes = [
  {
    path: '/',
    name: 'discover',
    component: Discover
  },
  {
    path: '/favorite',
    name: 'favorite',
    component: Favorite
  },
  {
    path: '/history',
    name: 'history',
    component: History
  },
  {
    path: '/:pathMatch(.*)',
    component: Discover
  }
];

const history = createWebHistory();
const router = createRouter({
  history,
  routes
});

export default router;