export interface IProjectData {
  id: string
  name: string
  tasksCount: number
}

export interface IProject extends IProjectData {
  isActive: boolean
}
