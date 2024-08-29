import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import SingUpView from '@/views/SignUpView.vue'
import datadocterView from '@/views/DatadocterView.vue'
import Appointment from '@/views/Appointment.vue'
import Symptom from '@/views/Symptom.vue'
import Shop from '@/views/Shop.vue'
<<<<<<< HEAD
import Cart from '@/views/Cart.vue'
=======
import Addproduct from '@/views/Addproduct.vue'   

>>>>>>> 21d66dc549cf13c9acb6bea1454f1ebaf00444dc

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
<<<<<<< HEAD
      path: '/cart',
      name: 'cart',
      component: Cart
=======
      path: '/Addproduct',
      name: 'Addproduct',
      component: Addproduct
>>>>>>> 21d66dc549cf13c9acb6bea1454f1ebaf00444dc
    },

  ]
})

export default router
