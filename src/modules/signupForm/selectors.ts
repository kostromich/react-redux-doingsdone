import { IFormFieldState, IState } from 'types'

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

export const getSignupFormTouchedFields = (state: IState) =>
  Object.values(state.signupForm.fields)
    .filter(one => one.touched)

export const getSignupFormUntouchedFields = (state: IState): IFormFieldState[] =>
  Object.values(state.signupForm.fields)
    .filter(one => !one.touched)

export const getSignupFormErrors = (state: IState): string[] => state.signupForm.errors
