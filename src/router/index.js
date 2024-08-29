import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import SingUpView from '@/views/SignUpView.vue'
import datadocterView from '@/views/DatadocterView.vue'
import Appointment from '@/views/Appointment.vue'
import Symptom from '@/views/Symptom.vue'
import Shop from '@/views/Shop.vue'
import Cart from '@/views/Cart.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/signup',
      name: 'signup',
      component: SingUpView
    },
    {
      path: '/datadocter',
      name: 'datadocter',
      component: datadocterView
    },
    {
      path: '/appointment',
      name: 'appointment',
      component: Appointment
    },
    {
      path: '/symptom',
      name: 'symptom',
      component: Symptom
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },

  ]
})

export default router
