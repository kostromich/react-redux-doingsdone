import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import signupForm from './signupForm'

const global = {}

const createReducer = ({ history }) => combineReducers({
  global,
  signupForm,
  router: connectRouter(history)
} as any)

export default createReducer
