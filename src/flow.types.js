// @flow

export type State = {
  activeFilters: Object,
  attributeChartData: Object,
  filterComponents: Object
}

export type VuexContext = {
  state: State,
  commit: Function,
  dispatch: Function,
  getters: Object
}
