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
        FETCH_METADATA: td.function(),
        FETCH_AGGREGATES: td.function()
      }

      state = {
        activeFilters: {}
      }

      store = new Vuex.Store({actions, state})
    })

    it('should dispatch FETCH_METADATA and FETCH_AGGREGATES when created', () => {
      shallow(BiobankAggregatesContainer, {store, localVue})
      td.verify(actions.FETCH_METADATA(td.matchers.anything(), undefined, undefined))
      td.verify(actions.FETCH_AGGREGATES(td.matchers.anything(), undefined, undefined))
    })

    it('should compute activeFilters based on the store', () => {
      const wrapper = shallow(BiobankAggregatesContainer, {store, localVue})
      expect(wrapper.vm.activeFilters).to.deep.equal(state.activeFilters)
    })

    it('should watch the activeFilters and dispatch FETCH_AGGREGATES on change', () => {
      shallow(BiobankAggregatesContainer, {store, localVue})
      store.state.activeFilters = {filter: 'value'}
      td.verify(actions.FETCH_AGGREGATES(td.matchers.anything(), undefined, undefined))
    })
  })
})
