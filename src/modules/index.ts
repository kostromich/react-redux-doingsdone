import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import global from './global'
import signUpForm from './signUpForm'
import signInForm from './signInForm'

const createReducer = ({ history }) => combineReducers({
  global,
  signUpForm,
  signInForm,
  router: connectRouter(history)
} as any)

export default createReducer
