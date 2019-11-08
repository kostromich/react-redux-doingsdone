import { push } from 'connected-react-router'
import * as actions from './actions'
import { loadProjects } from 'modules/projects'
import { ROUTE_GUEST_PAGE } from 'routes'
import { TUser } from 'types'

export const checkUserSession = () => async dispatch => {
  const storedUser = window.sessionStorage.getItem('user')

  if (!storedUser) {
    return
  }

  try {
    const user: TUser = JSON.parse(storedUser)
    await dispatch(actions.setUser(user))
  } catch (e) {
    console.log('Error', e)
  }
}

export const signOutUser = () => async dispatch => {
  dispatch(actions.setUser(undefined))
  window.sessionStorage.removeItem('user')
  dispatch(push(ROUTE_GUEST_PAGE))
}

export const initApplication = () => async dispatch => {
  await dispatch(checkUserSession())
  await dispatch(loadProjects())
  dispatch(actions.setInitialized(true))
}
