import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import global from './global'
import signUpForm from './signUpForm'
import signInForm from './signInForm'
import filters from './filters'
import projects from './projects'

const createReducer = ({ history }) => combineReducers({
  global,
  signUpForm,
  signInForm,
  filters,
  projects,
  router: connectRouter(history)
} as any)

export default createReducer
