import DropdownFilterComponent from 'src/components/filters/DropdownFilterComponent'
import { shallow } from '@vue/test-utils'

describe('components', () => {
  describe('filters', () => {
    describe('DropdownFilterComponent', () => {
      const propsData = {
        filter: 'test',
        options: [
          {
            label: 'test',
            value: 'test value'
          }
        ]
      }

      it('should render a select element with the list of options passed down in props', () => {
        const wrapper = shallow(DropdownFilterComponent, {propsData})
        const select = wrapper.find('select')
        const options = select.findAll('option')
        expect(options.length).to.equal(2)
      })

      it('should emit optionSelected event when value changes', () => {
        const wrapper = shallow(DropdownFilterComponent, {propsData})
        wrapper.setData({value: 'new value'})
        expect(wrapper.emitted('optionSelected')).to.deep.equal([['test', 'new value']])
      })

      it('should update value when initialValue changes', () => {
        const wrapper = shallow(DropdownFilterComponent, {propsData})
        wrapper.setProps({initialValue: 'new value'})
        expect(wrapper.vm.value).to.equal('new value')
      })
    })
  })
})
