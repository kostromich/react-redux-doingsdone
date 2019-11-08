import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import global from './global'
import signUpForm from './signUpForm'
import signInForm from './signInForm'
import addProjectForm from './addProjectForm'
import filters from './filters'
import projects from './projects'

const createReducer = ({ history }) => combineReducers({
  global,
  signUpForm,
  signInForm,
  addProjectForm,
  filters,
  projects,
  router: connectRouter(history)
} as any)

export default createReducer
