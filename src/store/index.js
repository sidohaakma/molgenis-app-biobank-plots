import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'

import type { State } from '../flow.types'

const state: State = {
  /**
   * A map containing active filters and their selected filter values
   */
  activeFilters: {},

  /**
   * A map containing the different filter components and their specific option lists
   */
  filterComponents: {},

  aggs: [],
  biobanks: [],
  lookupList: []
}

Vue.use(Vuex)
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  strict: true
})
