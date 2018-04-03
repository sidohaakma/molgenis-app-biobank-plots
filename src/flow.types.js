// @flow

export type Chart = {
  id?: string,
  title?: string,
  type?: string,
  data?: Array<*>,
  labels?: Array<String>
}

export type State = {
  activeFilters: Object,
  charts: Array<Chart>,
  filterComponents: Object,
  totalNumberOfSamples: number
}

export type VuexContext = {
  state: State,
  commit: Function,
  dispatch: Function,
  getters: Object
}
