import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

const global = {}

const createReducer = ({ history }) => combineReducers({
  global,
  router: connectRouter(history)
} as any)

export default createReducer
