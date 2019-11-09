import db from 'db'
import { push } from 'connected-react-router'
import * as actions from './actions'
import { getUser } from 'selectors'
import { ROUTE_HOME_PAGE } from 'routes'
import { IProject, IState } from 'types'

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

export const redirectToProject = (project: IProject) => async dispatch =>
  dispatch(push(`${ROUTE_HOME_PAGE}/${project.data.id}`))
