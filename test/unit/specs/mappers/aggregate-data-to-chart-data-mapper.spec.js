import aggregateDataToChartDataMapper from 'src/mappers/aggregate-data-to-chart-data-mapper'

const initialState = window.__INITIAL_STATE__ || {}

describe('mappers', () => {
  describe('aggregateDataToChartDataMapper', () => {
    it('should map an aggregate result to a chart data object for a horizontal bar chart', () => {
      const attribute = {
        name: 'biobank',
        title: 'Number of samples per biobank',
        type: 'HorizontalBarChart',
        inline: false
      }

      const aggregates = {
        matrix: [
          [649],
          [877]
        ],
        xLabels: [
          {
            'id': 'BIOMARCS',
            'abbr': 'BIOMARCS',
            'description': 'test'
          },
          {
            'id': 'ALPHAOMEGA',
            'abbr': 'ALPHAOMEGA'
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
              ],
              'descriptions': ['', 'test']
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
        inline: false
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
              ],
              'descriptions': [
                '',
                '',
                'Unknown'
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

    it('should map an aggregate result to a chart data object for a MultiColumnChart', () => {
      const attribute = {
        name: 'data_type',
        title: 'Data types',
        inline: false,
        columns: [
          {id: 'transcriptome', label: 'Transcriptome'},
          {id: 'genotypes', label: 'Genotypes'}
        ],
        type: 'MultiColumnChart',
        datasets: [
          {label: 'Available', backgroundColor: '#000'},
          {label: 'Unavailable', backgroundColor: '#000'}
        ]
      }

      const aggregates = [
        {
          aggs: {
            matrix: [
              [877],
              [649]
            ]
          },
          xAttr: {
            name: 'transcriptome'
          }
        },
        {
          aggs: {
            matrix: [
              [200],
              [300]
            ]
          },
          xAttr: {
            name: 'genotypes'
          }
        }
      ]

      const actual = aggregateDataToChartDataMapper(attribute, aggregates)
      const expected = {
        'dataCollection': {
          'datasets': [
            {
              'backgroundColor': '#000',
              'data': [
                877,
                200
              ],
              'label': 'Available'
            },
            {
              'backgroundColor': '#000',
              'data': [
                649,
                300
              ],
              'label': 'Unavailable'
            }
          ],
          'labels': [
            'Transcriptome',
            'Genotypes'
          ]
        },
        'id': 'data_type',
        'inline': false,
        'title': 'Data types',
        'type': 'MultiColumnChart'
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
})
