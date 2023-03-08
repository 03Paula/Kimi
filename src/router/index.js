import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/index.vue'
import Login from '@/components/Login.vue'
import Registro from '@/components/Registro.vue'
import Listado from '@/components/Listado.vue'
import Contacto from '@/components/Contacto.vue'
import Producto from '@/components/Producto.vue'
import Usuario from '@/components/Usuario.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/registro',
      name: 'registro',
      component: Registro
    },
    {
      path: '/listado',
      name: 'listado',
      component: Listado
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: Contacto
    },
    {
      path: '/producto',
      name: 'producto',
      component: Producto
    },
    {
      path: '/usuario',
      name: 'usuario',
      component: Usuario
    },
  ]
})

export default router
