import aggregateDataToChartDataMapper from 'src/utils/aggregate-data-to-chart-data-mapper'

describe('aggregateDataToChartDataMapper', () => {
  it('should map an aggregate result to a chart data object for a vertical bar chart', () => {
    const metadata = {
      attributes: []
    }

    const actual = aggregateDataToChartDataMapper(metadata)
    const expected = {}

    expect(actual).to.deep.equal(expected)
  })

  it('should map an aggregate result to a chart data object for a horizontal bar chart', () => {

  })

  it('should map an aggregate result to a chart data object for a column chart', () => {

  })
})
