// @flow

// $FlowFixMe
import api from '@molgenis/molgenis-api-client'
import * as mappers from '../utils/mappers'

import type { VuexContext } from '../flow.types'

const {sampleTable} = window.__INITIAL_STATE__ || {}

export default {
  'GET_SUBJECT_METADATA' ({commit}: VuexContext) {
    api.get('/api/v2/' + sampleTable + '?includeCategories=true').then(response => {
      const filterComponents = mappers.subjectMetadataToFilterMapper(response.meta)
      commit('SET_FILTER_COMPONENTS', filterComponents)
    })
    })
  }
}
