import { getNowUnixTime } from 'helpers'
import { IFormFieldState, IState, IUser } from 'types'

const uuid4 = require('uuid/v4')

export const getSignupFormName = (state: IState): IFormFieldState =>
  state.signupForm.fields.name

export const getSignupFormNameValue = (state: IState): string =>
  state.signupForm.fields.name.value

export const getSignupFormEmail = (state: IState): IFormFieldState =>
  state.signupForm.fields.email

export const getSignupFormEmailValue = (state: IState): string =>
  state.signupForm.fields.email.value

export const getSignupFormPassword = (state: IState): IFormFieldState =>
  state.signupForm.fields.password

export const getSignupFormPasswordValue = (state: IState): string =>
  state.signupForm.fields.password.value

export const getSignupFormTouched = (state: IState): boolean =>
  getSignupFormUntouchedFields(state).length === 0

export const getSignupFormErrors = (state: IState): string[] => state.signupForm.errors

export const getSignupFormFields = (state: IState): IFormFieldState[] =>
  Object.values(state.signupForm.fields)

export const getSignupFormUntouchedFields = (state: IState): IFormFieldState[] =>
  getSignupFormFields(state).filter(one => !one.isTouched)

export const getSignupFormFieldsErrors = (state: IState): string[] =>
  getSignupFormFields(state)
    .map(one => one.errors || [])
    .reduce((accum, current) => accum.concat(current), [])

export const getSignupFormUser = (state: IState): IUser => ({
  id: uuid4(),
  email: getSignupFormEmailValue(state),
  password: getSignupFormPasswordValue(state),
  name: getSignupFormNameValue(state),
  createdAt: getNowUnixTime()
})
