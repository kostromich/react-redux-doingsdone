import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import global from './global'
import signUpForm from './signUpForm'
import signInForm from './signInForm'
import filters from './filters'

const createReducer = ({ history }) => combineReducers({
  global,
  signUpForm,
  signInForm,
  filters,
  router: connectRouter(history)
} as any)

export default createReducer
