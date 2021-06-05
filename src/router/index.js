import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/clothing',
    name: 'clothing',
    component: () => import('../views/Сlothing.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
