// @flow

// $FlowFixMe
import api from '@molgenis/molgenis-api-client'
import * as mappers from '../utils/mappers'

import type { VuexContext } from '../flow.types'

const {sampleTable} = window.__INITIAL_STATE__ || {}

/**
 * List of attributes used to fetch aggregate data
 * These attributes are all involved in one plot or another
 */
const attributes = ['biobank', 'smoking', 'sex', 'transcriptome', 'wbcc', 'genotypes', 'metabolome', 'methylome', 'wgs']

export default {
  'GET_SUBJECT_METADATA' ({commit}: VuexContext) {
    api.get('/api/v2/' + sampleTable + '?includeCategories=true').then(response => {
      const filterComponents = mappers.subjectMetadataToFilterMapper(response.meta)
      commit('SET_FILTER_COMPONENTS', filterComponents)
    })
  },

  'GET_SUBJECT_AGGREGATION' ({commit}: VuexContext) {
    attributes.forEach(attribute => {
      api.get('/api/v2/' + sampleTable + '?aggs=x==' + attribute).then(response => {
        const attributeChartData = mappers.aggregateDataToChartData(attribute, response.aggs)
        commit('UPDATE_ATTRIBUTE_CHART_DATA', attributeChartData)
      })
    })
  },

  'UPDATE_SUBJECT_AGGREGATION' ({state, commit}: VuexContext) {
    console.log('UPDATE AGGREGATES!')
  }
}
