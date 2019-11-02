import { getNowUnixTime } from 'helpers'
import { IFormFieldState, IState, IUser } from 'types'

const uuid4 = require('uuid/v4')

export const getSignUpFormName = (state: IState): IFormFieldState =>
  state.signUpForm.fields.name

export const getSignUpFormNameValue = (state: IState): string =>
  state.signUpForm.fields.name.value

export const getSignUpFormEmail = (state: IState): IFormFieldState =>
  state.signUpForm.fields.email

export const getSignUpFormEmailValue = (state: IState): string =>
  state.signUpForm.fields.email.value

export const getSignUpFormPassword = (state: IState): IFormFieldState =>
  state.signUpForm.fields.password

export const getSignUpFormPasswordValue = (state: IState): string =>
  state.signUpForm.fields.password.value

export const getSignUpFormTouched = (state: IState): boolean =>
  getSignUpFormUntouchedFields(state).length === 0

export const getSignUpFormErrors = (state: IState): string[] => state.signUpForm.errors

export const getSignUpFormFields = (state: IState): IFormFieldState[] =>
  Object.values(state.signUpForm.fields)

export const getSignUpFormUntouchedFields = (state: IState): IFormFieldState[] =>
  getSignUpFormFields(state).filter(one => !one.isTouched)

export const getSignUpFormFieldsErrors = (state: IState): string[] =>
  getSignUpFormFields(state)
    .map(one => one.errors || [])
    .reduce((accum, current) => accum.concat(current), [])

export const getSignUpFormUser = (state: IState): IUser => ({
  id: uuid4(),
  email: getSignUpFormEmailValue(state),
  password: getSignUpFormPasswordValue(state),
  name: getSignUpFormNameValue(state),
  createdAt: getNowUnixTime()
})
