import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/clientes',
    name: 'Clientes',
    component: () => import(/*webpackChunkName: "ayuda" */ '../views/ClienteView.vue')
  },
  {
    path: '/pedidos',
    name: 'Pedidos',
    component: () => import(/*webpackChunkName: "ayuda" */ '../views/PedidoView.vue')
  },
  {
    path: '/calcular',
    name: 'Calcular',
    component: () => import(/*webpackChunkName: "ayuda" */ '../views/CalcularView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
