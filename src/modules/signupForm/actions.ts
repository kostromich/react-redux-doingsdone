import * as types from './types'

export const setSignupFormNameTouched = () =>
  ({ type: types.SET_SIGNUP_FORM_NAME_TOUCHED })

export const setSignupFormNameValue = (nameValue: string) =>
  ({ type: types.SET_SIGNUP_FORM_NAME_VALUE, payload: nameValue })

export const setSignupFormNameErrors = (nameErrors: string[]) =>
  ({ type: types.SET_SIGNUP_FORM_NAME_ERRORS, payload: nameErrors })

export const setSignupFormEmailTouched = () =>
  ({ type: types.SET_SIGNUP_FORM_EMAIL_TOUCHED })

export const setSignupFormEmailValue = (emailValue: string) =>
  ({ type: types.SET_SIGNUP_FORM_EMAIL_VALUE, payload: emailValue })

export const setSignupFormEmailErrors = (emailErrors: string[]) =>
  ({ type: types.SET_SIGNUP_FORM_EMAIL_ERRORS, payload: emailErrors })

export const setSignupFormPasswordTouched = () =>
  ({ type: types.SET_SIGNUP_FORM_PASSWORD_TOUCHED })

export const setSignupFormPasswordValue = (passwordValue: string) =>
  ({ type: types.SET_SIGNUP_FORM_PASSWORD_VALUE, payload: passwordValue })

export const setSignupFormPasswordErrors = (passwordErrors: string[]) =>
  ({ type: types.SET_SIGNUP_FORM_PASSWORD_ERRORS, payload: passwordErrors })

export const setSignupFormErrors = (formErrors: string[]) =>
  ({ type: types.SET_SIGNUP_FORM_ERRORS, payload: formErrors })

export const clearSignupForm = () =>
  ({ type: types.CLEAR_SIGNUP_FORM })
