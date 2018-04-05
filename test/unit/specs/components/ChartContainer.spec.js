import ChartContainer from 'src/components/ChartContainer'
import { shallow, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'

describe('components', () => {
  describe('ChartContainer', () => {
    let chart = {dataCollection: {}, type: '', title: '', id: ''}
    let getters
    let inlineChart = {dataCollection: {}, type: '', title: '', id: ''}
    let localVue
    let store

    beforeEach(() => {
      localVue = createLocalVue()
      localVue.use(Vuex)

      getters = {
        getCharts: () => [chart],
        getInlineCharts: () => [inlineChart]
      }

      store = new Vuex.Store({getters})
    })

    it('should compute a chart array from the store', () => {
      const wrapper = shallow(ChartContainer, {store, localVue})
      expect(wrapper.vm.charts).to.deep.equal([chart])
    })

    it('should compute an inline charts array from the store', () => {
      const wrapper = shallow(ChartContainer, {store, localVue})
      expect(wrapper.vm.inlineCharts).to.deep.equal([inlineChart])
    })

    it('should return a deep copy of a data collection', () => {
      const wrapper = shallow(ChartContainer, {store, localVue})
      expect(wrapper.vm.getDataCollection(chart)).to.deep.equal(chart.dataCollection)
    })
  })
})
