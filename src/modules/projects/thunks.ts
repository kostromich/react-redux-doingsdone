import db from 'db'
import * as actions from './actions'
import { getUser } from 'selectors'
import { IState } from 'types'

export const loadProjects = () => async (dispatch, getState: () => IState) => {
  const user = getUser(getState())

  if (!user) {
    return
  }

  try {
    const projects = await db.getUserProjects(user)
    dispatch(actions.setProjects(projects))
    dispatch(actions.setIsProjectsLoaded(true))
  } catch (e) {
    console.error(e)
  }
}
