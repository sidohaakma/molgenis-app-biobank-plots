import Vue from 'vue'
import Router from 'vue-router'
import BiobankAggregatesContainer from 'src/pages/BiobankAggregatesContainer'

Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: BiobankAggregatesContainer
    }
  ]
})
