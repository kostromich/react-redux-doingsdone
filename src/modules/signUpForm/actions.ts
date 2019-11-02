import * as types from './types'

export const setSignUpFormNameTouched = (isTouched: boolean) =>
  ({ type: types.SET_SIGNUP_FORM_NAME_TOUCHED, payload: isTouched })

export const setSignUpFormNameValue = (nameValue: string) =>
  ({ type: types.SET_SIGNUP_FORM_NAME_VALUE, payload: nameValue })

export const setSignUpFormNameErrors = (nameErrors: string[]) =>
  ({ type: types.SET_SIGNUP_FORM_NAME_ERRORS, payload: nameErrors })

export const setSignUpFormEmailTouched = (isTouched: boolean) =>
  ({ type: types.SET_SIGNUP_FORM_EMAIL_TOUCHED, payload: isTouched })

export const setSignUpFormEmailValue = (emailValue: string) =>
  ({ type: types.SET_SIGNUP_FORM_EMAIL_VALUE, payload: emailValue })

export const setSignUpFormEmailErrors = (emailErrors: string[]) =>
  ({ type: types.SET_SIGNUP_FORM_EMAIL_ERRORS, payload: emailErrors })

export const setSignUpFormPasswordTouched = (isTouched: boolean) =>
  ({ type: types.SET_SIGNUP_FORM_PASSWORD_TOUCHED, payload: isTouched })

export const setSignUpFormPasswordValue = (passwordValue: string) =>
  ({ type: types.SET_SIGNUP_FORM_PASSWORD_VALUE, payload: passwordValue })

export const setSignUpFormPasswordErrors = (passwordErrors: string[]) =>
  ({ type: types.SET_SIGNUP_FORM_PASSWORD_ERRORS, payload: passwordErrors })

export const setSignUpFormErrors = (formErrors: string[]) =>
  ({ type: types.SET_SIGNUP_FORM_ERRORS, payload: formErrors })

export const clearSignUpForm = () =>
  ({ type: types.CLEAR_SIGNUP_FORM })
