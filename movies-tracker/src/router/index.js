import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/components/Home/HomePage.vue'
import Favorites from '@/components/pages/Favorites.vue'
import Watched from '@/components/pages/Watched.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'home',
      component: HomePage,
    },
    { path: '/favorites', name: 'favorites', component: Favorites },
    { path: '/watched', name: 'watched', component: Watched },
  ],
})

export default router
