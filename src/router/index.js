import { createWebHistory, createRouter } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import WalletView from '../views/WalletView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    props: true,
  },
  {
    path: '/wallet/:data',
    name: 'Wallet',
    component: WalletView,
    props: true,
  },
];
const base = process.env.NODE_ENV === 'production' ? '/vue_nft_sample/' : '/';
const router = createRouter({
  history: createWebHistory(base),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
