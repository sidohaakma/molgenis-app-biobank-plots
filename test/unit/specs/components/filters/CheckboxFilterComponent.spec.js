import CheckboxFilterComponent from 'src/components/filters/CheckboxFilterComponent'
import { shallow } from '@vue/test-utils'

describe('components', () => {
  describe('filters', () => {
    describe('CheckboxFilterComponent', () => {
      const propsData = {
        filter: 'test',
        options: [
          {
            label: 'test',
            value: 'test value'
          }
        ],
        orientation: 'vertical'
      }

      it('should render checkboxes with the list of options passed down in props', () => {
        const wrapper = shallow(CheckboxFilterComponent, {propsData})
        const checkboxes = wrapper.findAll('.form-check')
        expect(checkboxes.length).to.equal(1)
      })

      it('should emit optionSelected event when value changes', () => {
        const wrapper = shallow(CheckboxFilterComponent, {propsData})
        wrapper.setData({value: ['new value']})
        expect(wrapper.emitted('optionSelected')).to.deep.equal([['test', ['new value']]])
      })

      it('should render checkboxes inline when orientation is set to horizontal', () => {
        propsData.orientation = 'horizontal'
        const wrapper = shallow(CheckboxFilterComponent, {propsData})
        expect(wrapper.contains('.form-check-inline')).to.equal(true)
      })
    })
  })
})
