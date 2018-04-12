import HorizontalBarChartComponent from 'src/components/charts/HorizontalBarChartComponent'
import { mount, shallow } from '@vue/test-utils'

describe('components', () => {
  describe('charts', () => {
    describe('HorizontalBarChartComponent', () => {
      const propsData = {
        chartTitle: 'TestChart',
        chartData: {
          datasets: [{
            data: [1, 2, 3],
            backgroundColor: '#ffffff',
            descriptions: [
              '',
              'description',
              `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rutrum purus efficitur, dapibus odio 
              id, auctor ligula. Pellentesque ullamcorper nisl at dolor condimentum, eu euismod ex dapibus.Proin vel 
              sapien ipsum. Cras velit augue, placerat metus.`
            ]
          }],
          labels: ['label1', 'label2', 'label3']
        }
      }

      it('should compute chartData based on dataCollection property', () => {
        const wrapper = shallow(HorizontalBarChartComponent, {propsData})
        expect(wrapper.vm.chartData).to.deep.equal(propsData.chartData)
      })

      it('should compute chartTitle based on title property', () => {
        const wrapper = shallow(HorizontalBarChartComponent, {propsData})
        expect(wrapper.vm.chartTitle).to.deep.equal(propsData.chartTitle)
      })

      describe('getDescriptionParts', () => {
        const wrapper = mount(HorizontalBarChartComponent, {propsData})

        it('should work with string of max length (255 characters)', () => {
          const description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rutrum purus efficitur, dapibus odio id, auctor ligula. Pellentesque ullamcorper nisl at dolor condimentum, eu euismod ex dapibus. Proin vel sapien ipsum. Cras velit augue, placerat metus.`
          const expectedFirstPart = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rutrum purus efficitur, dapibus odio id, auctor ligula.`
          const expectedLastPart = `Pellentesque ullamcorper nisl at dolor condimentum, eu euismod ex dapibus. Proin vel sapien ipsum. Cras velit augue, placerat metus.`
          const actual = wrapper.vm.getDescriptionParts(description)
          // First and last with a space in between should equal the actual description
          expect(`${actual.firstPart} ${actual.lastPart}`).to.equal(description)
          // The first part should consist of all full words within the first 130 characters of the description
          expect(actual.firstPart).to.equal(expectedFirstPart)
          // The last part should consist of the remaining words of the description
          expect(actual.lastPart).to.equal(expectedLastPart)
        })

        it('should work when description is empty', () => {
          const description = ''
          const actual = wrapper.vm.getDescriptionParts(description)
          // First and last should equal empty string
          expect(`${actual.firstPart}${actual.lastPart}`).to.equal(description)
          expect(actual.firstPart).to.equal('')
          expect(actual.lastPart).to.equal('')
        })

        it('should work when description is shorter than 130 characters (last part should be empty string)', () => {
          const description = 'test'
          const actual = wrapper.vm.getDescriptionParts(description)
          // First part should be the description and last should equal empty string
          expect(`${actual.firstPart}${actual.lastPart}`).to.equal(description)
          expect(actual.firstPart).to.equal(description)
          expect(actual.lastPart).to.equal('')
        })
      })
    })
  })
})
