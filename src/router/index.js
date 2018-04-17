import Vue from 'vue'
import Router from 'vue-router'
import BiobankAggregatesContainer from 'src/pages/BiobankAggregatesContainer'

const {baseUrl} = window.__INITIAL_STATE__ || {}

Vue.use(Router)
export default new Router({
  mode: 'history',
  base: baseUrl,
  routes: [
    {
      path: '/',
      component: BiobankAggregatesContainer
    }
  ]
})
