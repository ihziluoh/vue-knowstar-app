import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LiveView from '../views/LiveView.vue'
import FindView from '../views/FindView.vue'
import UserView from '../views/UserView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/live',
      name: 'live',
      component: LiveView
    },
    {
      path: '/find',
      name: 'find',
      component: FindView
    },
    {
      path: '/user',
      name: 'User',
      component: UserView
    },
  ]
})

export default router
