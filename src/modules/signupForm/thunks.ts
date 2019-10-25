import {
  setSignupFormNameErrors,
  setSignupFormEmailErrors,
  setSignupFormPasswordErrors,
  setSignupFormErrors,
  setSignupFormEmailTouched,
  setSignupFormPasswordTouched,
  setSignupFormNameTouched
} from './actions'
import {
  getSignupFormEmailValue,
  getSignupFormFieldsErrors,
  getSignupFormNameValue,
  getSignupFormPasswordValue,
  getSignupFormUser
} from './selectors'
import { emailValidator, nameValidator, passwordValidator, SIGNUP_FORM_ERROR } from './validators'
import { IState } from 'types'

export const validateName = (title: string) => async dispatch => {
  const errors = nameValidator(title)
  dispatch(setSignupFormNameErrors(errors))
}

export const validateEmail = (email: string) => async dispatch => {
  const errors = emailValidator(email)

  dispatch(setSignupFormEmailErrors(errors))
}

export const validatePassword = (password: string) => async dispatch => {
  const errors = passwordValidator(password)

  dispatch(setSignupFormPasswordErrors(errors))
}

export const validateSignupForm = () => async (dispatch, getState: () => IState) => {
  dispatch(setSignupFormEmailTouched(true))
  dispatch(validateEmail(getSignupFormEmailValue(getState())))

  dispatch(setSignupFormPasswordTouched(true))
  dispatch(validatePassword(getSignupFormPasswordValue(getState())))

  dispatch(setSignupFormNameTouched(true))
  dispatch(validateName(getSignupFormNameValue(getState())))

  const formFieldsErrors = getSignupFormFieldsErrors(getState())

  if (formFieldsErrors.length > 0) {
    dispatch(setSignupFormErrors([ SIGNUP_FORM_ERROR ]))
  } else {
    dispatch(setSignupFormErrors([]))
  }
}

export const addNewUser = () => async (dispatch, getState: () => IState) => {
  const state = getState()

  alert('check console for new user params')
  console.log('signupFormUser', getSignupFormUser(state))
}
