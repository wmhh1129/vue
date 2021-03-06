import Vue from 'vue'
import Router from 'vue-router'
import MainLayout from '@/components/MainLayout.vue'
import ParkLot from '@/components/Parklot.vue'
import Analysis from '@/components/Analysis.vue'
import Accounts from '@/components/Account.vue'
import Login from '@/components/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainLayout',
      component: MainLayout,
      redirect: 'park-management',
      children: [
        {
          path: 'park-management',
          name: 'ParkLot',
          component: ParkLot
        },
        {
          path: 'analysis-chart',
          name: 'Analysis',
          component: Analysis
        },
        {
          path: 'accounts',
          name: 'Accounts',
          component: Accounts
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
