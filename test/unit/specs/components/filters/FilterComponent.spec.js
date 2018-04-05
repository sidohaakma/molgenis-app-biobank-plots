import FilterComponent from 'src/components/filters/FilterComponent'
import { shallow, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import td from 'testdouble'

describe('components', () => {
  describe('filters', () => {
    describe('FilterComponent', () => {
      let localVue
      let mutations
      let state
      let store

      beforeEach(() => {
        localVue = createLocalVue()
        localVue.use(Vuex)

        mutations = {
          UPDATE_ACTIVE_FILTERS: td.function()
        }

        state = {
          filters: []
        }

        store = new Vuex.Store({mutations, state})
      })

      const propsData = {
        filter: {
          id: 'test',
          label: 'Test',
          options: ['test']
        }
      }

      it('should commit UPDATE_ACTIVE_FILTERS when handleOptionSelect method is called', () => {
        const wrapper = shallow(FilterComponent, {propsData, store, localVue})
        wrapper.vm.handleOptionSelect('filter', ['test'])
        td.verify(mutations.UPDATE_ACTIVE_FILTERS(state, {filter: ['test']}))
      })
    })
  })
})
