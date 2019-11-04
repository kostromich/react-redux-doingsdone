import sort from 'ramda/es/sort'
import ascend from 'ramda/es/ascend'
import path from 'ramda/es/path'
import { IProject } from 'types'

const sortByNameAsc = sort(ascend(path([ 'data', 'name' ])))

export const sortProjectsByNameAsc = (projects: IProject[]): IProject[] => sortByNameAsc(projects)
