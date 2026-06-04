import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/Inicio'
  },
  {
    path: '/Inicio',
    component: () => import('../views/Inicio.vue')
  },
  {
    path: '/Sumadora',
    component: () => import('../views/Sumadora.vue')
  },
  {
    path: '/Traductor',
    component: () => import('../views/Traductor.vue')
  },
  {
    path: '/Tabla',
    component: () => import('../views/Tabla.vue')
  },
  {
    path: '/Experiencia',
    component: () => import('../views/Experiencia.vue')
  },
  {
    path: '/folder/:id',
    component: () => import ('../views/FolderPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
