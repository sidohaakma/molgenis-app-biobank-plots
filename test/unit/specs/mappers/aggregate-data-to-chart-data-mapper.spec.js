import aggregateDataToChartDataMapper from 'src/mappers/aggregate-data-to-chart-data-mapper'

const initialState = window.__INITIAL_STATE__ || {}

describe('aggregateDataToChartDataMapper', () => {
  it('should map an aggregate result to a chart data object for a horizontal bar chart', () => {
    const attribute = {
      name: 'biobank',
      title: 'Number of samples per biobank',
      type: 'HorizontalBarChart',
      inline: false,
      sorted: false
    }

    const aggregates = {
      matrix: [
        [877],
        [649]
      ],
      xLabels: [
        {
          'id': 'ALPHAOMEGA',
          'abbr': 'ALPHAOMEGA'
        },
        {
          'id': 'BIOMARCS',
          'abbr': 'BIOMARCS'
        }
      ]
    }

    const actual = aggregateDataToChartDataMapper(attribute, aggregates)
    const expected = {
      'dataCollection': {
        'datasets': [
          {
            'backgroundColor': initialState.primaryColor,
            'data': [
              877,
              649
            ]
          }
        ],
        'labels': [
          'ALPHAOMEGA',
          'BIOMARCS'
        ]
      },
      'id': 'biobank',
      'inline': false,
      'title': 'Number of samples per biobank',
      'type': 'HorizontalBarChart'
    }

    expect(actual).to.deep.equal(expected)
  })

  it('should map an aggregate result to a chart data object for a vertical bar chart', () => {
    const attribute = {
      name: 'age_years',
      title: 'Age',
      type: 'VerticalBarChart',
      inline: false,
      sorted: true
    }

    const aggregates = {
      matrix: [
        [877],
        [649],
        [231]
      ],
      xLabels: [
        25,
        50,
        null
      ]
    }

    const actual = aggregateDataToChartDataMapper(attribute, aggregates)
    const expected = {
      'dataCollection': {
        'datasets': [
          {
            'backgroundColor': initialState.primaryColor,
            'data': [
              877,
              649,
              231
            ]
          }
        ],
        'labels': [
          25,
          50,
          'Unknown'
        ]
      },
      'id': 'age_years',
      'inline': false,
      'title': 'Age',
      'type': 'VerticalBarChart'
    }

    expect(actual).to.deep.equal(expected)
  })

  it('should map an aggregate result to a chart data object for a column chart', () => {
    const attribute = {
      name: 'smoking',
      inline: true,
      title: 'Smoking data',
      type: 'ColumnChart',
      datasets: [
        {label: 'Yes', backgroundColor: initialState.primaryColor},
        {label: 'No', backgroundColor: initialState.secondaryColor},
        {label: 'Not available', backgroundColor: initialState.tertiaryColor}
      ]
    }

    const aggregates = {
      matrix: [
        [877],
        [649],
        [532]
      ],
      xLabels: [
        true,
        false,
        null
      ]
    }

    const actual = aggregateDataToChartDataMapper(attribute, aggregates)
    const expected = {
      'dataCollection': {
        'datasets': [
          {
            'backgroundColor': initialState.primaryColor,
            'data': [
              877
            ],
            'label': 'Yes'
          },
          {
            'backgroundColor': initialState.secondaryColor,
            'data': [
              649
            ],
            'label': 'No'
          },
          {
            'backgroundColor': initialState.tertiaryColor,
            'data': [
              532
            ],
            'label': 'Not available'
          }
        ],
        'labels': [
          'Smoking data'
        ]
      },
      'id': 'smoking',
      'inline': true,
      'title': 'Smoking data',
      'type': 'ColumnChart'
    }

    expect(actual).to.deep.equal(expected)
  })

  it('Should throw an UnsupportedChartTypeException when there is an unknown chart type', () => {
    const attribute = {
      type: 'Unknown chart type'
    }

    const aggregates = {}
    expect(() => aggregateDataToChartDataMapper(attribute, aggregates)).to.throw('Unsupported chart type: Unknown chart type')
  })
})
