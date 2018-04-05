import BiobankAggregatesContainer from 'src/pages/BiobankAggregatesContainer'
import { shallow, createLocalVue } from '@vue/test-utils'
import td from 'testdouble'
import Vuex from 'vuex'

describe('pages', () => {
  describe('BiobankAggregatesContainer', () => {
    let actions
    let localVue
    let state
    let store

    beforeEach(() => {
      localVue = createLocalVue()
      localVue.use(Vuex)

      actions = {
        GET_SUBJECT_METADATA: td.function(),
        FETCH_SUBJECT_AGGREGATES: td.function()
      }

      state = {
        activeFilters: {}
      }

      store = new Vuex.Store({actions, state})
    })

    it('should dispatch GET_SUBJECT_METADATA and GET_SUBJECT_AGGREGATION when created', () => {
      shallow(BiobankAggregatesContainer, {store, localVue})
      td.verify(actions.GET_SUBJECT_METADATA(td.matchers.anything(), undefined, undefined))
      td.verify(actions.FETCH_SUBJECT_AGGREGATES(td.matchers.anything(), undefined, undefined))
    })

    it('should compute activeFilters based on the store', () => {
      const wrapper = shallow(BiobankAggregatesContainer, {store, localVue})
      expect(wrapper.vm.activeFilters).to.deep.equal(state.activeFilters)
    })

    it('should watch the activeFilters and dispatch UPDATE_SUBJECT_AGGREGATION on change', () => {
      shallow(BiobankAggregatesContainer, {store, localVue})
      store.state.activeFilters = {filter: 'value'}
      td.verify(actions.FETCH_SUBJECT_AGGREGATES(td.matchers.anything(), undefined, undefined))
    })
  })
})
