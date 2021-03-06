import RangeFilterComponent from 'src/components/filters/RangeFilterComponent'
import { shallow } from '@vue/test-utils'

describe('components', () => {
  describe('filters', () => {
    describe('RangeFilterComponent', () => {
      const propsData = {
        filter: 'test',
        options: [
          {
            label: 'test',
            value: 'test value'
          }
        ]
      }

      it('should emit optionSelected event when value changes', () => {
        const wrapper = shallow(RangeFilterComponent, {propsData})
        wrapper.vm.handleOptionSelect([0, 100])
        expect(wrapper.emitted('optionSelected')).to.deep.equal([['test', [0, 100]]])
      })

      it('should update value when initialValue changes', () => {
        const wrapper = shallow(RangeFilterComponent, {propsData})
        wrapper.setProps({initialValue: [20, 40]})
        expect(wrapper.vm.value).to.deep.equal([20, 40])
      })
    })
  })
})
