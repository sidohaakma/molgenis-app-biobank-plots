import mutations from 'src/store/mutations'

describe('mutations', () => {
  describe('RESET_ALL_ACTIVE_FILTERS', () => {
    it('should reset the activeFilters by removing all of them', () => {
      const state = {activeFilters: {filter: 'value', another_filter: 'another value'}}
      mutations.RESET_ALL_ACTIVE_FILTERS(state)
      expect(state.activeFilters).to.deep.equal({})
    })
  })

  describe('SET_FILTERS', () => {
    it('should set the filters in the state', () => {
      const state = {filters: {}}
      mutations.SET_FILTERS(state, {filter: 'component'})
      expect(state.filters).to.deep.equal({filter: 'component'})
    })
  })

  describe('SET_LOADING', () => {
    it('should set loading in the state', () => {
      const state = {loading: true}
      mutations.SET_LOADING(state, false)
      expect(state.loading).to.equal(false)
    })
  })

  describe('SET_TOTAL_NUMBER_OF_SAMPLES', () => {
    it('should set the totalNumberOfSamples in the state', () => {
      const state = {totalNumberOfSamples: 0}
      mutations.SET_TOTAL_NUMBER_OF_SAMPLES(state, 100)
      expect(state.totalNumberOfSamples).to.equal(100)
    })
  })

  describe('UPDATE_ACTIVE_FILTERS', () => {
    it('should update the activeFilters in the state', () => {
      const state = {activeFilters: {}}
      mutations.UPDATE_ACTIVE_FILTERS(state, {filter: 'value'})
      expect(state.activeFilters).to.deep.equal({filter: 'value'})
    })
  })

  describe('UPDATE_CHARTS', () => {
    it('should update the charts in the state', () => {
      const state = {charts: []}
      mutations.UPDATE_CHARTS(state, ['new chart'])
      expect(state.charts).to.deep.equal(['new chart'])
    })
  })
})
