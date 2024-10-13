import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import SingUpView from '@/views/SignUpView.vue'
import datadocterView from '@/views/DatadocterView.vue'
import Appointment from '@/views/Appointment.vue'
import Symptom from '@/views/Symptom.vue'
import Shop from '@/views/Shop.vue'
import Cart from '@/views/Cart.vue'
import Addproduct from '@/views/Addproduct.vue'
import Userdetail_fordoc from '@/views/Userdetail_fordoc.vue'
import OrderSum from '@/views/OrderSum.vue'     
import Patient from '@/views/Patient.vue'
import consullt from '@/views/consullt.vue'  
import Preparproducts from'@/views/Preparproducts.vue'  
import Consulttdoctor  from '@/views/Consulttdoctor.vue'  
import Choosedoc from '@/views/Choosedoc.vue'
import Profile_User from '@/views/Profile_User.vue'
import EditaddProductView from '@/views/EditaddProductView.vue'
import updeateorder from '@/views/updeateorder.vue'
import reatmentqueue from '@/views/reatmentqueue.vue'


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
      path: '/datadocterView',
      name: 'datadocterView',
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
    {
      path: '/Addproduct',
      name: 'Addproduct',
      component: Addproduct
    },
    {
      path: '/userdetail_fordoc',
      name: 'userdetail_fordoc',
      component: Userdetail_fordoc
    },
    {
      path: '/orderSum',
      name: 'orderSum',
      component: OrderSum
    },
    {
      path: '/choosedoc',
      name: 'choosedoc',
      component: Choosedoc 
    },
    {
      path: '/profile_User',
      name: 'profile_User',
      component: Profile_User 
    },
    {
      path: '/editaddProductView',
      name: 'editaddProductView',
      component: EditaddProductView 
    },
    {
      path: '/Consulttdoctor',
      name: 'Consulttdoctor',
      component : Consulttdoctor
    },
    {
      path: '/consullt',
      name: 'consullt',
      component : consullt
    },
    {
      path: '/Patient',
      name: 'Patient',
      component : Patient
    },
    {
      path: '/Preparproducts',
      name: 'Preparproducts',
      component : Preparproducts
    },
    {
      path: '/updeateorder',
      name: 'updeateorder',
      component :updeateorder
    },
    {
      path: '/reatmentqueue',
      name: 'reatmentqueue',
      component : reatmentqueue
    },
    
  
    
  ]
})

export default router
