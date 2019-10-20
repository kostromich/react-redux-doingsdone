export interface ITaskFormData {
  title: string
  projectId: string
  deadlineDate?: Date
}

export interface ITask extends ITaskFormData {
  id: string
  userId: string
  completionDate?: Date
}

export interface ITaskToDisplay extends ITask {
  isImportant: boolean
}

export interface ITask {

}
export interface IProject {
  id: string
  name: string
  tasksCount: number
  isActive: boolean
}

export interface IUser {
  id: string
  name: string
  password: string
  email: string
  createdAt: number
}
