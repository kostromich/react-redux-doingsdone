import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import signUpForm from './signUpForm'

const global = {}

const createReducer = ({ history }) => combineReducers({
  global,
  signUpForm,
  router: connectRouter(history)
} as any)

export default createReducer
