export default {
  'SET_FILTER_COMPONENTS' (state, filterComponents) {
    state.filterComponents = filterComponents
  },

  'UPDATE_ACTIVE_FILTERS' (state, update) {
    state.activeFilters = {...state.activeFilters, ...update}
  }
}
