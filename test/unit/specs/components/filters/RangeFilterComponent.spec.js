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
        wrapper.setData({value: [0, 100]})
        expect(wrapper.emitted('optionSelected')).to.deep.equal([['test', [0, 100]]])
      })
    })
  })
})
