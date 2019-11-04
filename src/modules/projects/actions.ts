import * as types from './types'

export const addProject = (projectId?: string) =>
  ({ type: types.SET_ACTIVE_PROJECT_ID, payload: projectId })
