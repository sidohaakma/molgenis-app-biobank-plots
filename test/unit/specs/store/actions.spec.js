import actions from 'src/store/actions'
import api from '@molgenis/molgenis-api-client'
import td from 'testdouble'

import utils from '@molgenis/molgenis-vue-test-utils'

describe.only('actions', () => {
  describe('GET_SUBJECT_METADATA', () => {
    it('should commit the total number of samples and filter components to the state', done => {
      const response = {meta: {}, total: 100}
      const get = td.function(api.get)
      td.when(get('/api/v2/undefined/?includeCategories=true')).thenResolve(response)
      td.replace(api, 'get', get)

      const filters = {}
      const mockSubjectMetadataToFilterMapper = td.replace('src/mappers/subject-metadata-to-filter-mapper')
      td.when(mockSubjectMetadataToFilterMapper(response.meta)).thenReturn(filters)

      const options = {
        expectedMutations: [
          {type: 'SET_FILTER_COMPONENTS', payload: filters},
          {type: 'SET_TOTAL_NUMBER_OF_SAMPLES', payload: 100}
        ]
      }

      utils.testAction(actions.GET_SUBJECT_METADATA, options, done)
    })
  })
})
