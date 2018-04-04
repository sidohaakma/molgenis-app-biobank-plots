import actions from 'src/store/actions'
import api from '@molgenis/molgenis-api-client'
import td from 'testdouble'
import utils from '@molgenis/molgenis-vue-test-utils'
import mappers from 'src/mappers'

describe.only('actions', () => {
  beforeEach(() => {
    td.reset()
  })

  describe('GET_SUBJECT_METADATA', () => {
    it('should commit the total number of samples and filter components to the state', done => {
      const response = {meta: {}, total: 100}
      const get = td.function('api.get')
      td.when(get(td.matchers.anything())).thenResolve(response)
      td.replace(api, 'get', get)

      const filters = {}
      const subjectMetadataToFilterMapper = td.function('mappers.subjectMetadataToFilterMapper')
      td.when(subjectMetadataToFilterMapper(response.meta)).thenReturn(filters)
      td.replace(mappers, 'subjectMetadataToFilterMapper', subjectMetadataToFilterMapper)

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
