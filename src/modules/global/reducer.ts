import * as types from './types'
import { IGlobalState } from 'types'

const initialState: IGlobalState = {
  isInitialized: false,
  user: undefined
}

export default (state: IGlobalState = initialState, { type, payload }) => {
  switch (type) {
    case types.SET_INITIALIZED: {
      return {
        ...state,
        isInitialized: payload
      }
    }

    case types.SET_USER: {
      return {
        ...state,
        user: payload
      }
    }

    default:
      return state
  }
}
