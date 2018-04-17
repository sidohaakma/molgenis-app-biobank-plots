// @flow

// $FlowFixMe
import Vue from 'vue'

// $FlowFixMe
import Vuex from 'vuex'

import actions from './actions'
import getters from './getters'
import mutations from './mutations'

import type { State } from '../flow.types'

const state: State = {
  /**
   * A map containing active filters and their selected filter values
   */
  activeFilters: {},

  /**
   * An array containing chart data objects
   */
  charts: [],

  /**
   * A map containing the different filters and their specific option lists
   */
  filters: {},

  /**
   * A boolean setting the global loading state of the application
   */
  loading: true,

  /**
   * The total number of samples available in the database
   */
  totalNumberOfSamples: 0
}

Vue.use(Vuex)
export default new Vuex.Store({
  actions,
  getters,
  mutations,
  state,
  strict: true
})
