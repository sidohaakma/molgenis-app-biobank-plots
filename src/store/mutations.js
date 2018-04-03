export default {
  'RESET_ALL_ACTIVE_FILTERS' (state) {
    state.activeFilters = {}
  },

  'SET_FILTER_COMPONENTS' (state, filterComponents) {
    state.filterComponents = filterComponents
  },

  'SET_TOTAL_NUMBER_OF_SAMPLES' (state, totalNumberOfSamples) {
    state.totalNumberOfSamples = totalNumberOfSamples
  },

  'UPDATE_ACTIVE_FILTERS' (state, update) {
    state.activeFilters = {...state.activeFilters, ...update}
  },

  'UPDATE_ATTRIBUTE_CHART_DATA' (state, charts) {
    state.charts = charts
  }
}
