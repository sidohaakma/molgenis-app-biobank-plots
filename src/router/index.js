import Vue from 'vue'
import Router from 'vue-router'
import BiobankCounts from '@/components/BiobankCounts'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: BiobankCounts
    }
  ]
})
