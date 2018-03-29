// @flow

// $FlowFixMe
import api from '@molgenis/molgenis-api-client'
import * as mappers from '../utils/mappers'

import type { VuexContext } from '../flow.types'

const {sampleTable} = window.__INITIAL_STATE__ || {}

/**
 * List of attributes used to create chart data
 */
const {attributes} = window.__INITIAL_STATE__ || {}

export default {
  'GET_SUBJECT_METADATA' ({commit}: VuexContext) {
    api.get('/api/v2/' + sampleTable + '?includeCategories=true').then(response => {
      const filterComponents = mappers.subjectMetadataToFilterMapper(response.meta)
      commit('SET_FILTER_COMPONENTS', filterComponents)
      commit('SET_TOTAL_NUMBER_OF_SAMPLES', response.meta.total)
    })
  },

  'GET_SUBJECT_AGGREGATION' ({commit}: VuexContext) {
    const promises = []

    attributes.forEach(attribute => {
      promises.push(api.get('/api/v2/' + sampleTable + '?aggs=x==' + attribute.name).then(response => {
        return mappers.aggregateDataToChartData(attribute, response.aggs)
      }))
    })

    Promise.all(promises).then(chartData => {
      commit('UPDATE_ATTRIBUTE_CHART_DATA', chartData)
    })
  },

  'UPDATE_SUBJECT_AGGREGATION' ({state, commit}: VuexContext) {
    const promises = []

    attributes.forEach(attribute => {
      const rsql = mappers.mapActiveFiltersToRSQL(state.activeFilters)
      promises.push(api.get('/api/v2/' + sampleTable + '?aggs=x==' + attribute.name + '&q=' + rsql).then(response => {
        return mappers.aggregateDataToChartData(attribute, response.aggs)
      }))
    })

    Promise.all(promises).then(chartData => {
      commit('UPDATE_ATTRIBUTE_CHART_DATA', chartData)
    })
  }
}
