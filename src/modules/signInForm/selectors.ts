import { IFormFieldState, IState, TUserCredentials } from 'types'

export const getSignInFormEmail = (state: IState): IFormFieldState =>
  state.signInForm.fields.email

export const getSignInFormEmailValue = (state: IState): string =>
  state.signInForm.fields.email.value

export const getSignInFormPassword = (state: IState): IFormFieldState =>
  state.signInForm.fields.password

export const getSignInFormPasswordValue = (state: IState): string =>
  state.signInForm.fields.password.value

export const getSignInFormTouched = (state: IState): boolean =>
  getSignInFormUntouchedFields(state).length === 0

export const getSignInFormErrors = (state: IState): string[] => state.signInForm.errors

export const getSignInFormFields = (state: IState): IFormFieldState[] =>
  Object.values(state.signInForm.fields)

export const getSignInFormUntouchedFields = (state: IState): IFormFieldState[] =>
  getSignInFormFields(state).filter(one => !one.isTouched)

export const getSignInFormFieldsErrors = (state: IState): string[] =>
  getSignInFormFields(state)
    .map(one => one.errors || [])
    .reduce((accum, current) => accum.concat(current), [])

export const getUserCredentials = (state: IState): TUserCredentials => ({
  email: getSignInFormEmailValue(state),
  password: getSignInFormPasswordValue(state)
})
