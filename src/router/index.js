import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/outwear',
    name: 'outwear',
    component: () => import('../views/Outwear.vue')
  },
  {
    path: '/pants',
    name: 'pants',
    component: () => import('../views/Pants.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
