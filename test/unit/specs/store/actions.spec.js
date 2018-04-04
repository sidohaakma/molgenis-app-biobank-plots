import actions from 'src/store/actions'
import api from '@molgenis/molgenis-api-client'
import td from 'testdouble'
import utils from '@molgenis/molgenis-vue-test-utils'
import mappers from 'src/mappers'

describe('actions', () => {
  const filters = {}
  const charts = ['chart']
  const rsql = 'biobank==ALPHA'

  beforeEach(() => {
    td.reset()

    const activeFiltersToRsqlMapper = td.function('mappers.activeFiltersToRsqlMapper')
    td.replace(mappers, 'activeFiltersToRsqlMapper', activeFiltersToRsqlMapper)
    td.when(activeFiltersToRsqlMapper(td.matchers.anything())).thenReturn(rsql)

    const aggregateDataToChartDataMapper = td.function('mappers.aggregateDataToChartDataMapper')
    td.replace(mappers, 'aggregateDataToChartDataMapper', aggregateDataToChartDataMapper)
    td.when(aggregateDataToChartDataMapper(td.matchers.anything())).thenReturn(charts)

    const subjectMetadataToFilterMapper = td.function('mappers.subjectMetadataToFilterMapper')
    td.when(subjectMetadataToFilterMapper(td.matchers.anything())).thenReturn(filters)
    td.replace(mappers, 'subjectMetadataToFilterMapper', subjectMetadataToFilterMapper)
  })

  describe('GET_SUBJECT_METADATA', () => {
    it('should fetch metadata and commit the total number of samples and filter components to the state', done => {
      const response = {meta: {attributes: []}, total: 100}
      const get = td.function('api.get')
      td.when(get(td.matchers.anything())).thenResolve(response)
      td.replace(api, 'get', get)

      const filters = {}

      const options = {
        expectedMutations: [
          {type: 'SET_FILTERS', payload: filters},
          {type: 'SET_TOTAL_NUMBER_OF_SAMPLES', payload: 100}
        ]
      }

      utils.testAction(actions.GET_SUBJECT_METADATA, options, done)
    })
  })

  describe('GET_SUBJECT_AGGREGATION', () => {
    it('should fetch aggregates for every attribute and commit mapped chart data to the state', done => {
      const response = {aggs: {}}
      const get = td.function('api.get')
      td.when(get(td.matchers.anything())).thenResolve(response)
      td.replace(api, 'get', get)

      const options = {
        expectedMutations: [
          {type: 'UPDATE_CHARTS', payload: charts}
        ]
      }

      utils.testAction(actions.GET_SUBJECT_AGGREGATION, options, done)
    })
  })

  describe('UPDATE_SUBJECT_AGGREGATION', () => {
    it('should fetch aggregates with RSQL based on activeFilters and commit mapped chart data to the state', done => {

    })
  })
})
