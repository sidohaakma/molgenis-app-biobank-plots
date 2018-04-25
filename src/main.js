import Vue from 'vue'
import App from './App'

import store from './store'
import router from './router'

Vue.config.productionTip = false

if (window.__webpack_public_path__) {
  /* eslint-disable no-undef, camelcase */
  __webpack_public_path__ = window.__webpack_public_path__
  /* eslint-enable */
}

/* eslint-disable no-new */
new Vue({
  el: '#biobank-aggregates-app-container',
  store,
  router,
  components: {App},
  template: '<App/>'
})
