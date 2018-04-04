import mutations from 'src/store/mutations'

describe('mutations', () => {
  describe('RESET_ALL_ACTIVE_FILTERS', () => {
    it('should reset the activeFilters by removing all of them', () => {
      const state = {activeFilters: {filter: 'value', another_filter: 'another value'}}
      mutations.RESET_ALL_ACTIVE_FILTERS(state)
      expect(state.activeFilters).to.deep.equal({})
    })
  })

  describe('SET_FILTER_COMPONENTS', () => {
    it('should set the filterComponents in the state', () => {
      const state = {filterComponents: {}}
      mutations.SET_FILTER_COMPONENTS(state, {filter: 'component'})
      expect(state.filterComponents).to.deep.equal({filter: 'component'})
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

  describe('UPDATE_CHART_DATA', () => {
    it('should update the charts in the state', () => {
      const state = {charts: []}
      mutations.UPDATE_CHART_DATA(state, ['new chart'])
      expect(state.charts).to.deep.equal(['new chart'])
    })
  })
})
