import FilterContainer from 'src/components/FilterContainer'
import { shallow, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import td from 'testdouble'

describe('components', () => {
  describe('FilterContainer', () => {
    let localVue
    let mutations
    let state
    let store

    beforeEach(() => {
      localVue = createLocalVue()
      localVue.use(Vuex)

      mutations = {
        RESET_ALL_ACTIVE_FILTERS: td.function()
      }

      state = {
        filters: []
      }

      store = new Vuex.Store({mutations, state})
    })

    it('should compute filters from the store', () => {
      const wrapper = shallow(FilterContainer, {store, localVue})
      expect(wrapper.vm.filters).to.deep.equal(state.filters)
    })

    it('should reset the filters when the reset button is clicked', () => {
      const wrapper = shallow(FilterContainer, {store, localVue})
      wrapper.find('#reset-filter-btn').trigger('click')
      td.verify(mutations.RESET_ALL_ACTIVE_FILTERS(state, undefined))
    })

    it('should commit RESET_ALL_ACTIVE_FILTERS when resetFilters method is called', () => {
      const wrapper = shallow(FilterContainer, {store, localVue})
      wrapper.vm.resetFilters()
      td.verify(mutations.RESET_ALL_ACTIVE_FILTERS(state, undefined))
    })
  })
})
