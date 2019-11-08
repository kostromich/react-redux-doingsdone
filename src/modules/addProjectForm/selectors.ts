import { getNowUnixTime } from 'helpers'

import { IFormFieldState, IProjectData, IState } from 'types'
import { getUser } from '../global/selectors'

const uuid4 = require('uuid/v4')

export const getAddProjectFormTitle = (state: IState): IFormFieldState =>
  state.addProjectForm.fields.title

export const getAddProjectFormTitleValue = (state: IState): string =>
  getAddProjectFormTitle(state).value

export const getAddProjectFormTouched = (state: IState): boolean =>
  getAddProjectFormUntouchedFields(state).length === 0

export const getAddProjectFormErrors = (state: IState): string[] => state.addProjectForm.errors

export const getAddProjectFormFields = (state: IState): IFormFieldState[] =>
  Object.values(state.addProjectForm.fields)

export const getAddProjectFormUntouchedFields = (state: IState): IFormFieldState[] =>
  getAddProjectFormFields(state).filter(one => !one.isTouched)

export const getAddProjectFormFieldsErrors = (state: IState): string[] =>
  getAddProjectFormFields(state)
    .map(one => one.errors || [])
    .reduce((accum, current) => accum.concat(current), [])

export const getAddProjectFormProjectData = (state: IState): IProjectData => ({
  id: uuid4(),
  title: getAddProjectFormTitleValue(state),
  userId: getUser(state)!.id,
  createdAt: getNowUnixTime()
})
