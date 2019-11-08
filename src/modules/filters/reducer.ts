import * as types from './types'
import { IFiltersState } from 'types'

const initialState: IFiltersState = {
  activeProjectId: undefined
}

export default (state: IFiltersState = initialState, { type, payload }) => {
  switch (type) {
    case types.SET_ACTIVE_PROJECT_ID: {
      return {
        ...state,
        activeProjectId: payload
      }
    }

    default:
      return state
  }
}
