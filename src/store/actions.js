// @flow

// $FlowFixMe
import api from '@molgenis/molgenis-api-client'
import mappers from 'src/mappers'

import type { VuexContext } from '../flow.types'

export default {
  'GET_SUBJECT_METADATA' ({commit}: VuexContext) {
    // Deconstruct inside action to enable testing
    const {sampleTable} = window.__INITIAL_STATE__ || {}

    api.get('/api/v2/' + sampleTable + '?includeCategories=true').then(response => {
      const filters = mappers.subjectMetadataToFilterMapper(response.meta)
      commit('SET_FILTERS', filters)
      commit('SET_TOTAL_NUMBER_OF_SAMPLES', response.total)
    })
  },

  'GET_SUBJECT_AGGREGATION' ({commit}: VuexContext) {
    // Deconstruct inside action to enable testing
    const {attributes, sampleTable} = window.__INITIAL_STATE__ || {}

    const promises = []
    attributes.forEach(attribute => {
      promises.push(api.get('/api/v2/' + sampleTable + '?aggs=x==' + attribute.name).then(response => {
        return mappers.aggregateDataToChartDataMapper(attribute, response.aggs)
      }))
    })

    Promise.all(promises).then(charts => {
      commit('UPDATE_CHARTS', charts)
    })
  },

  'UPDATE_SUBJECT_AGGREGATION' ({state, commit}: VuexContext) {
    // Deconstruct inside action to enable testing
    const {attributes, sampleTable} = window.__INITIAL_STATE__ || {}

    const promises = []
    attributes.forEach(attribute => {
      const filters = mappers.activeFiltersToRsqlMapper(state.activeFilters)
      const rsql = !filters ? '' : '&q=' + filters

      promises.push(api.get('/api/v2/' + sampleTable + '?aggs=x==' + attribute.name + rsql).then(response => {
        return mappers.aggregateDataToChartDataMapper(attribute, response.aggs)
      }))
    })

    Promise.all(promises).then(charts => {
      commit('UPDATE_CHARTS', charts)
    })
  }
}
