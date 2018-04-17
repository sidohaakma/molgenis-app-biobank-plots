import ChartComponent from 'src/components/charts/ChartComponent'
import { shallow } from '@vue/test-utils'

describe('components', () => {
  describe('charts', () => {
    describe('ChartComponent', () => {
      const propsData = {
        title: '',
        type: '',
        dataCollection: {}
      }

      it('should compute chartData based on dataCollection property', () => {
        const wrapper = shallow(ChartComponent, {propsData})
        expect(wrapper.vm.chartData).to.deep.equal(propsData.dataCollection)
      })

      it('should compute chartTitle based on title property', () => {
        const wrapper = shallow(ChartComponent, {propsData})
        expect(wrapper.vm.chartTitle).to.deep.equal(propsData.title)
      })
    })
  })
})
