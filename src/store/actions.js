// @flow

// $FlowFixMe
import api from '@molgenis/molgenis-api-client'
import type { State } from '../flow.types'
import {SET_BIOBANKS} from './mutations'

const INITIAL_STATE = window.__INITIAL_STATE__

export const GET_BIOBANKS = '__GET_BIOBANKS__'

export default {
  [GET_BIOBANKS] ({ state, commit } : {state: State, commit: Function}) {
    api.get(`/api/v2/${INITIAL_STATE.biobankTable}`).then(response => {
      commit(SET_BIOBANKS, response.items)
    })
  }
}
