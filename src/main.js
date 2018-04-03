import Vue from 'vue'
import App from './App'

import store from './store'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#biobank-aggregates-app-container',
  store,
  router,
  components: {App},
  template: '<App/>'
})
