export interface IProjectData {
  name: string
  tasksCount: number
}

export interface IProject extends IProjectData {
  id: string
  isActive: boolean
}

export interface IUserData {
  name: string
  password: string
  email: string
  createdAt: number
}

export interface IUser extends IUserData {
  id: string
}
