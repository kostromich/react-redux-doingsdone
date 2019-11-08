import { IProject } from 'types'

export const getProjectId = (project: IProject): string => project.data.id
export const getProjectTitle = (project: IProject): string => project.data.title
export const getProjectTasksCount = (project: IProject): number => project.extra.tasksCount
export const getProjectIsActive = (project: IProject): boolean => project.extra.isActive || false
