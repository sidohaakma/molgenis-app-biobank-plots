// @flow

// $FlowFixMe
import api from '@molgenis/molgenis-api-client'

// $FlowFixMe
import mappers from 'src/mappers'

import type { VuexContext } from '../flow.types'

/**
 * Return aggregates for all attributes specified in window.__INITIAL_STATE__.attributes
 *
 * @param attributes list of attributes for which aggregates should be fetched
 * @param sampleTable the table containing data for all attributes
 * @param rsql optional RSQL string used to apply filters
 * @returns {Array}
 */
const fetchAttributeAggregates = (attributes, sampleTable, rsql) => {
  const promises = []
  rsql = rsql !== '' ? '&q=' + rsql : rsql

  attributes.forEach(attribute => {
    if (attribute.type === 'MultiColumnChart') {
      const columns = []
      attribute.columns.forEach(column => {
        columns.push(api.get('/api/v2/' + sampleTable + '?aggs=x==' + column.id + rsql).then(response => {
          return response
        }))
      })

      promises.push(Promise.all(columns).then(responses => {
        return mappers.aggregateDataToChartDataMapper(attribute, responses)
      }))
    } else {
      promises.push(api.get('/api/v2/' + sampleTable + '?aggs=x==' + attribute.name + rsql).then(response => {
        return mappers.aggregateDataToChartDataMapper(attribute, response.aggs)
      }))
    }
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
    // Deconstruct inside action to enable testing
    const {attributes, sampleTable} = window.__INITIAL_STATE__ || {}

    const filters = mappers.activeFiltersToRsqlMapper(state.activeFilters)
    const rsql = !filters ? '' : filters

    const promises = fetchAttributeAggregates(attributes, sampleTable, rsql)
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
