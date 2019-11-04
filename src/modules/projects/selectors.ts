import { getActiveProjectId } from 'selectors'
import { IProject, IState } from 'types'

export const getProjectById = (id: string, state: IState): IProject => ({
  ...state.projects.entities[id],
  extra: {
    ...state.projects.entities[id].extra,
    isActive: id === getActiveProjectId(state)
  }
})

export const getProjects = (state: IState): IProject[] =>
  state.projects.ids
    .map(id => getProjectById(id, state))
    .filter(Boolean)
