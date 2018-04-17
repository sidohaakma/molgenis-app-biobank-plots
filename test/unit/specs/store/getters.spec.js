import getters from 'src/store/getters'

describe('getters', () => {
  const state = {
    activeFilters: {test: 'value'},
    charts: [
      {
        id: '1',
        inline: false
      },
      {
        id: '2',
        inline: true
      },
      {
        id: '3',
        inline: false
      }
    ]
  }

  describe('getActiveFilterValueById', () => {
    it('should return a filter value based on ID', () => {
      const getActiveFilterValueById = getters.getActiveFilterValueById(state)
      const actual = getActiveFilterValueById('test')
      const expected = 'value'
      expect(actual).to.equal(expected)
    })
  })

  describe('getCharts', () => {
    it('should return charts that are not inline', () => {
      const actual = getters.getCharts(state)
      const expected = [{id: '1', inline: false}, {id: '3', inline: false}]
      expect(actual).to.deep.equal(expected)
    })
  })

  describe('getInlineCharts', () => {
    it('should return charts that are inline', () => {
      const actual = getters.getInlineCharts(state)
      const expected = [{id: '2', inline: true}]
      expect(actual).to.deep.equal(expected)
    })
  })
})
