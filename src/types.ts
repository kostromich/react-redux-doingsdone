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

export interface IUserData {
  name: string
  password: string
  email: string
}

export interface IUser extends IUserData {
  id: string
  createdAt: number
}

export interface IFormFieldState {
  isTouched: boolean,
  value?: any
  errors: string[]
}

export interface IGlobalState {
  isInitialized: boolean
}

type TUserProp = keyof IUserData

export type TSignupFormFieldsState = {
  [key in TUserProp]: IFormFieldState
}

export interface ISignupFormState {
  errors: string[]
  fields: TSignupFormFieldsState
}

export interface IState {
  global: IGlobalState
  signupForm: ISignupFormState
}
