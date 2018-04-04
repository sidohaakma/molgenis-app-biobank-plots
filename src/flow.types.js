// @flow

export type Chart = {
  id?: string,
  title?: string,
  dataCollection?: Object,
  labels?: Array<String>
}

export type State = {
  activeFilters: Object,
  charts: Array<Chart>,
  filters: Object,
  totalNumberOfSamples: number
}

export type VuexContext = {
  state: State,
  commit: Function,
  dispatch: Function,
  getters: Object
}
