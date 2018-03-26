export const SET_BIOBANKS = '__SET_BIOBANKS__'
export const SET_FILTER_DATA = '__SET_FILTER_DATA__'

export default {
  [SET_BIOBANKS] (state, items) {
    state.biobanks = items
  },
  [SET_FILTER_DATA] (state, filters) {
    state.filters = filters
  }
}
