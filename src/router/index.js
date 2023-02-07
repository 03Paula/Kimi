import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/index.vue'
import Login from '../components/login.vue'
import Registro from '../components/registro.vue'
import Listado from '../components/listado.vue'
import Contacto from '../components/contacto.vue'
import Producto from '../components/producto.vue'


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
  ]
})

export default router
