import * as types from './types'

export const setAddProjectFormTitleTouched = (isTouched: boolean) =>
  ({ type: types.SET_ADD_PROJECT_FORM_TITLE_TOUCHED, payload: isTouched })

export const setAddProjectFormTitleValue = (titleValue: string) =>
  ({ type: types.SET_ADD_PROJECT_FORM_TITLE_VALUE, payload: titleValue })

export const setAddProjectFormTitleErrors = (titleErrors: string[]) =>
  ({ type: types.SET_ADD_PROJECT_FORM_TITLE_ERRORS, payload: titleErrors })

export const setAddProjectFormErrors = (formErrors: string[]) =>
  ({ type: types.SET_ADD_PROJECT_FORM_ERRORS, payload: formErrors })

export const clearAddProjectForm = () =>
  ({ type: types.CLEAR_ADD_PROJECT_FORM })
