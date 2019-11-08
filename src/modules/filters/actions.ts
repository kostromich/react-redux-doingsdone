import * as types from './types'

export const setActiveProjectId = (projectId?: string) =>
  ({ type: types.SET_ACTIVE_PROJECT_ID, payload: projectId })
