// @flow

// $FlowFixMe
import api from '@molgenis/molgenis-api-client'
import type { State } from '../flow.types'
import {SET_BIOBANKS, SET_FILTER_DATA} from './mutations'

const INITIAL_STATE = window.__INITIAL_STATE__

export const GET_BIOBANKS = '__GET_BIOBANKS__'
export const GET_FILTER_DATA = '__GET_FILTER_DATA__'

export default {
  [GET_BIOBANKS] ({ state, commit } : {state: State, commit: Function}) {
    api.get(`/api/v2/${INITIAL_STATE.biobankTable}`).then(response => {
      commit(SET_BIOBANKS, response.items)
    })
  },
  [GET_FILTER_DATA] ({state, commit}: {state: State, commit: Function}) {
    api.get(`/api/v2/${INITIAL_STATE.sampleTable}`).then(response => {
      const filters = response.meta.attributes.find((attribute) => {
        return attribute.name === 'filters'
      }).attributes
      commit(SET_FILTER_DATA, filters)
    })
  }
}
