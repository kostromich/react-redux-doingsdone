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

export interface IProjectData {
  id: string
  name: string
  createdAt: number
}

export interface IProjectExtra {
  tasksCount: number
  isActive?: boolean
}

export interface IProject {
  data: IProjectData
  extra: IProjectExtra
}

export type TUser = {
  id: string
  email: string
  password: string
  name: string
  createdAt: number
}

export type TSignUpFormUserProps = Pick<TUser, 'email' | 'password' | 'name'>

export type TSignUpFormFieldsState = Record<keyof TSignUpFormUserProps, IFormFieldState>

export type TSignInFormUserProps = Pick<TUser, 'email' | 'password'>

export type TSignInFormFieldsState = Record<keyof TSignInFormUserProps, IFormFieldState>

export interface IFormFieldState {
  isTouched: boolean,
  value?: any
  errors: string[]
}

export interface IGlobalState {
  isInitialized: boolean
  user?: TUser
}

export interface ISignUpFormState {
  errors: string[]
  fields: TSignUpFormFieldsState
}

export interface ISignInFormState {
  errors: string[]
  fields: TSignInFormFieldsState
}

export interface IFiltersState {
  activeProjectId?: string
}

export interface IProjectsState {
  ids: string[]
  entities: Record<string, IProject>
}

export interface IState {
  global: IGlobalState
  signUpForm: ISignUpFormState
  signInForm: ISignInFormState
  filters: IFiltersState
  projects: IProjectsState
}

export type TUserCredentials = Pick<TUser, 'email' | 'password'>
