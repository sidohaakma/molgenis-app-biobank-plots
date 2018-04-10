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
    },
    {
      name: 'compound_test',
      type: 'MultiColumnChart',
      columns: [{id: 'test_column'}]
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
    td.when(aggregateDataToChartDataMapper({
      name: 'compound_test',
      type: 'MultiColumnChart',
      columns: [{id: 'test_column'}]
    }, [{aggs: {}}])).thenReturn('chart2')
    td.replace(mappers, 'aggregateDataToChartDataMapper', aggregateDataToChartDataMapper)
  })

  describe('FETCH_METADATA', () => {
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
          {type: 'SET_TOTAL_NUMBER_OF_SAMPLES', payload: 100},
          {type: 'SET_LOADING', payload: false}
        ]
      }

      utils.testAction(actions.FETCH_METADATA, options, done)
    })
  })

  describe('FETCH_AGGREGATES', () => {
    it('should fetch aggregates for every attribute and commit mapped chart data to the state', done => {
      const response = {aggs: {}}
      const get = td.function('api.get')
      td.when(get(td.matchers.anything())).thenResolve(response)
      td.replace(api, 'get', get)

      const options = {
        state: {activeFilters: {}},
        expectedMutations: [
          {type: 'UPDATE_CHARTS', payload: ['chart', 'chart2']}
        ],
        expectedActions: [
          {type: 'FETCH_TOTAL_NUMBER_OF_SAMPLES', payload: 'biobank==ALPHA'}
        ]
      }

      utils.testAction(actions.FETCH_AGGREGATES, options, done)
    })
  })

  describe('FETCH_TOTAL_NUMBER_OF_SAMPLES', () => {
    it('should fetch total number of samples with a filter', done => {
      const response = {meta: {attributes: []}, total: 50}
      const get = td.function('api.get')
      td.when(get('/api/v2/test?q=biobank==ALPHA')).thenResolve(response)
      td.replace(api, 'get', get)

      const options = {
        payload: 'biobank==ALPHA',
        expectedMutations: [
          {type: 'SET_TOTAL_NUMBER_OF_SAMPLES', payload: 50}
        ]
      }

      utils.testAction(actions.FETCH_TOTAL_NUMBER_OF_SAMPLES, options, done)
    })
  })
})
