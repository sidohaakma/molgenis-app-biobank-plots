export default {
  'RESET_ALL_ACTIVE_FILTERS' (state) {
    state.activeFilters = {}
  },

  'SET_FILTERS' (state, filters) {
    state.filters = filters
  },

  'SET_LOADING' (state, loading) {
    state.loading = loading
  },

  'SET_TOTAL_NUMBER_OF_SAMPLES' (state, totalNumberOfSamples) {
    state.totalNumberOfSamples = totalNumberOfSamples
  },

  'UPDATE_ACTIVE_FILTERS' (state, update) {
    state.activeFilters = {...state.activeFilters, ...update}
  },

  'UPDATE_CHARTS' (state, charts) {
    state.charts = charts
  }
}
