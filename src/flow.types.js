// @flow

export type State = {
  aggs: Array<Array<mixed>>,
  biobanks: Array<Object>,
  filters: Object
}

export type VuexContext = {
  state: State,
  commit: Function,
  dispatch: Function,
  getters: Object
}
