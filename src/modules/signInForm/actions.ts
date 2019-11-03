import * as types from './types'

export const setSignInFormEmailTouched = (isTouched: boolean) =>
  ({ type: types.SET_SIGN_IN_FORM_EMAIL_TOUCHED, payload: isTouched })

export const setSignInFormEmailValue = (emailValue: string) =>
  ({ type: types.SET_SIGN_IN_FORM_EMAIL_VALUE, payload: emailValue })

export const setSignInFormEmailErrors = (emailErrors: string[]) =>
  ({ type: types.SET_SIGN_IN_FORM_EMAIL_ERRORS, payload: emailErrors })

export const setSignInFormPasswordTouched = (isTouched: boolean) =>
  ({ type: types.SET_SIGN_IN_FORM_PASSWORD_TOUCHED, payload: isTouched })

export const setSignInFormPasswordValue = (passwordValue: string) =>
  ({ type: types.SET_SIGN_IN_FORM_PASSWORD_VALUE, payload: passwordValue })

export const setSignInFormPasswordErrors = (passwordErrors: string[]) =>
  ({ type: types.SET_SIGN_IN_FORM_PASSWORD_ERRORS, payload: passwordErrors })

export const setSignInFormErrors = (formErrors: string[]) =>
  ({ type: types.SET_SIGN_IN_FORM_ERRORS, payload: formErrors })

export const clearSignInForm = () =>
  ({ type: types.CLEAR_SIGN_IN_FORM })
