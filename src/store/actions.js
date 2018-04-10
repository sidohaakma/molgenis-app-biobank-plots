// @flow

// $FlowFixMe
import api from '@molgenis/molgenis-api-client'

// $FlowFixMe
import mappers from 'src/mappers'

import type { VuexContext } from '../flow.types'

const fetchAttributeAggregates = (rsql) => {
  // Deconstruct inside action to enable testing
  const {attributes, sampleTable} = window.__INITIAL_STATE__ || {}

  const promises = []
  rsql = rsql !== '' ? '&q=' + rsql : rsql
  attributes.forEach(attribute => {
    promises.push(api.get('/api/v2/' + sampleTable + '?aggs=x==' + attribute.name + rsql).then(response => {
      return mappers.aggregateDataToChartDataMapper(attribute, response.aggs)
    }))
  })
  return promises
}

export default {
  'FETCH_METADATA' ({commit}: VuexContext) {
    // Deconstruct inside action to enable testing
    const {sampleTable} = window.__INITIAL_STATE__ || {}

    api.get('/api/v2/' + sampleTable + '?includeCategories=true').then(response => {
      const filters = mappers.subjectMetadataToFilterMapper(response.meta)
      commit('SET_FILTERS', filters)
      commit('SET_TOTAL_NUMBER_OF_SAMPLES', response.total)
      commit('SET_LOADING', false)
    })
  },

  'FETCH_AGGREGATES' ({state, commit, dispatch}: VuexContext) {
    const filters = mappers.activeFiltersToRsqlMapper(state.activeFilters)
    const rsql = !filters ? '' : filters

    const promises = fetchAttributeAggregates(rsql)
    Promise.all(promises).then(charts => {
      commit('UPDATE_CHARTS', charts)
    })

    dispatch('FETCH_TOTAL_NUMBER_OF_SAMPLES', rsql)
  },

  'FETCH_TOTAL_NUMBER_OF_SAMPLES' ({commit}: VuexContext, rsql: string) {
    // Deconstruct inside action to enable testing
    const {sampleTable} = window.__INITIAL_STATE__ || {}

    rsql = rsql !== '' ? '?q=' + rsql : rsql
    api.get('/api/v2/' + sampleTable + rsql).then(response => {
      commit('SET_TOTAL_NUMBER_OF_SAMPLES', response.total)
    })
  }
}
