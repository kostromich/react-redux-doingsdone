import * as types from './types'
import { normalizeProjects, sortProjects } from './helpers'
import { IProjectsState, IProject } from 'types'

const initialState: IProjectsState = {
  isProjectsLoaded: false,
  ids: [],
  entities: {}
}

export default (state: IProjectsState = initialState, { type, payload }) => {
  switch (type) {
    case types.SET_IS_PROJECTS_LOADED: {
      return {
        ...state,
        isProjectsLoaded: payload
      }
    }

    case types.SET_PROJECTS: {
      const projects: IProject[] = [
        ...payload
      ]

      const entities = normalizeProjects(projects)

      return {
        ...state,
        ids: sortProjects(Object.values(entities)).map(one => one.data.id),
        entities
      }
    }

    case types.ADD_PROJECT: {
      const project: IProject = {
        ...payload
      }
      const entities = {
        ...state.entities,
        [ payload.data.id ]: project
      }

      return {
        ...state,
        ids: sortProjects(Object.values(entities)).map(one => one.data.id),
        entities
      }
    }

    default:
      return state
  }
}
