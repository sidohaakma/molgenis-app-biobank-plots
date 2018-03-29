// @flow

export type ChartData = {
  chartTitle?: string,
  chartType?: string,
  data?: Array<*>,
  labels?: Array<String>
}

export type State = {
  activeFilters: Object,
  chartData: Array<ChartData>,
  filterComponents: Object,
  totalNumberOfSamples: number
}

export type VuexContext = {
  state: State,
  commit: Function,
  dispatch: Function,
  getters: Object
}
