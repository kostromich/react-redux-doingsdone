import * as types from './types'
import { IProject } from 'types'

export const setIsProjectsLoaded = (isProjectsLoaded: boolean) =>
  ({ type: types.SET_IS_PROJECTS_LOADED, payload: isProjectsLoaded })

export const setProjects = (projects: IProject[]) =>
  ({ type: types.SET_PROJECTS, payload: projects })

export const addProject = (project?: IProject) =>
  ({ type: types.ADD_PROJECT, payload: project })
