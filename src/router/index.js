import Vue from 'vue'
import Router from 'vue-router'
import MainLayout from '@/components/MainLayout.vue'
import First from '@/components/First.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainLayout',
      component: MainLayout
    },
    {
      path: '/first',
      name: 'First',
      component: First
    }
  ]
})
