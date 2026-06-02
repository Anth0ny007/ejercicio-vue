import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/Inicio'
  },
  {
    path: '/Inicio',
    component: () => import('../views/inicio.vue')
  },
  {
    path: '/Sumadora',
    component: () => import('../views/sumadora.vue')
  },
  {
    path: '/Traductor',
    component: () => import('../views/traductor.vue')
  },
  {
    path: '/Tabla',
    component: () => import('../views/tabla.vue')
  },
  {
    path: '/Experiencia',
    component: () => import('../views/experiencia.vue')
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
