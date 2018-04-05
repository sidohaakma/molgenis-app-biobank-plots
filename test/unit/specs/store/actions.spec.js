import actions from 'src/store/actions'
import api from '@molgenis/molgenis-api-client'
import td from 'testdouble'
import utils from '@molgenis/molgenis-vue-test-utils'
import mappers from 'src/mappers'

window.__INITIAL_STATE__ = {
  sampleTable: 'test',
  attributes: [
    {
      name: 'test'
    }
  ]
}

describe('actions', () => {
  beforeEach(() => {
    td.reset()

    const activeFiltersToRsqlMapper = td.function('mappers.activeFiltersToRsqlMapper')
    td.when(activeFiltersToRsqlMapper({})).thenReturn('biobank==ALPHA')
    td.replace(mappers, 'activeFiltersToRsqlMapper', activeFiltersToRsqlMapper)

    const aggregateDataToChartDataMapper = td.function('mappers.aggregateDataToChartDataMapper')
    td.when(aggregateDataToChartDataMapper({name: 'test'}, {})).thenReturn('chart')
    td.replace(mappers, 'aggregateDataToChartDataMapper', aggregateDataToChartDataMapper)
  })

  describe('GET_SUBJECT_METADATA', () => {
    it('should fetch metadata and commit the total number of samples and filter components to the state', done => {
      const response = {meta: {attributes: []}, total: 100}
      const get = td.function('api.get')
      td.when(get(td.matchers.anything())).thenResolve(response)
      td.replace(api, 'get', get)

      const filters = {}
      const subjectMetadataToFilterMapper = td.function('mappers.subjectMetadataToFilterMapper')
      td.when(subjectMetadataToFilterMapper(response.meta)).thenReturn(filters)
      td.replace(mappers, 'subjectMetadataToFilterMapper', subjectMetadataToFilterMapper)

      const options = {
        expectedMutations: [
          {type: 'SET_FILTERS', payload: filters},
          {type: 'SET_TOTAL_NUMBER_OF_SAMPLES', payload: 100}
        ]
      }

      utils.testAction(actions.GET_SUBJECT_METADATA, options, done)
    })
  })

  describe('FETCH_SUBJECT_AGGREGATES', () => {
    it('should fetch aggregates for every attribute and commit mapped chart data to the state', done => {
      const response = {aggs: {}}
      const get = td.function('api.get')
      td.when(get(td.matchers.anything())).thenResolve(response)
      td.replace(api, 'get', get)

      const options = {
        state: {activeFilters: {}},
        expectedMutations: [
          {type: 'UPDATE_CHARTS', payload: ['chart']}
        ]
      }

      utils.testAction(actions.FETCH_SUBJECT_AGGREGATES, options, done)
    })
  })
})
