import { createRouter, createWebHashHistory } from 'vue-router'
import login from '../views/loginPage.vue'
import homePage from '../views/homePage.vue'
import shoppingCart from '../views/shoppingCart.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: login
  },
  {
    path: '/home',
    name: 'homePage',
    component: homePage
  },
  {
    path: '/shoppingCart',
    name: 'shoppingCart',
    component: shoppingCart
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
