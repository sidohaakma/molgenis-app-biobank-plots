// @flow

export type ChartLabel = {
  type: string,
  label: string
}

export type AttributeChartData = {
  chartType?: string,
  options?: Object,
  data?: Array<Array<*>>,
  labels?: Array<ChartLabel>
}

export type State = {
  activeFilters: Object,
  attributeChartData: AttributeChartData,
  filterComponents: Object,
  totalNumberOfSamples: number
}

export type VuexContext = {
  state: State,
  commit: Function,
  dispatch: Function,
  getters: Object
}
