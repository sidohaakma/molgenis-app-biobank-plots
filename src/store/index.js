import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'

import type { State } from '../flow.types'

const state: State = {
  /**
   * A map containing the different types of filters and their specific option lists
   */
  filters: {},

  /**
   * The currently selected biobank
   */
  selectedBiobank: '',

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
