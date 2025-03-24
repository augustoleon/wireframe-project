import { createRouter, createWebHistory } from 'vue-router'
import SignUp from '../components/SignUp.vue'
import VerifyPhone from '../views/VerifyPhone.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/sign-up'
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/verify-phone-number',
      name: 'VerifyPhone',
      component: VerifyPhone
    }
  ]
})

export default router