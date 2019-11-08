import sort from 'ramda/es/sort'
import ascend from 'ramda/es/ascend'
import path from 'ramda/es/path'
import { IProject } from 'types'

const sortByNameAsc = sort(ascend(path([ 'data', 'name' ])))

export const sortProjectsByNameAsc = (projects: IProject[]): IProject[] => sortByNameAsc(projects)

export const normalizeProjects = (projects: IProject[]): Record<string, IProject> => {
  const entities: Record<string, IProject> = {}

  for (const project of projects) {
    entities[project.data.id] = project
  }

  return entities
}
