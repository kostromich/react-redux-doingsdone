import {
  setSignupFormNameErrors,
  setSignupFormEmailErrors,
  setSignupFormPasswordErrors, setSignupFormErrors
} from './actions'
import {
  getSignupFormEmailValue,
  getSignupFormNameValue,
  getSignupFormPasswordValue,
  getSignupFormTouchedFields,
  getSignupFormUntouchedFields
} from './selectors'
import { emailValidator, nameValidator, passwordValidator, SIGNUP_FORM_ERROR } from './validators'
import { getNowUnixTime } from 'helpers'
import { IState } from 'types'

const uuid4 = require('uuid/v4')

export const validateName = (title: string) => async dispatch => {
  const errors = nameValidator(title)
  dispatch(setSignupFormNameErrors(errors))

  if (errors.length > 0) {
    dispatch(setSignupFormErrors([ SIGNUP_FORM_ERROR ]))
  }
}

export const validateEmail = (email: string) => async dispatch => {
  const errors = emailValidator(email)
  dispatch(setSignupFormEmailErrors(errors))

  if (errors.length > 0) {
    dispatch(setSignupFormErrors([ SIGNUP_FORM_ERROR ]))
  }
}

export const validatePassword = (password: string) => async dispatch => {
  const errors = passwordValidator(password)
  dispatch(setSignupFormPasswordErrors(errors))

  if (errors.length > 0) {
    dispatch(setSignupFormErrors([ SIGNUP_FORM_ERROR ]))
  }
}

export const validateSignupForm = () => async (dispatch, getState: () => IState) => {
  dispatch(validateEmail(getSignupFormEmailValue(getState())))
  dispatch(validatePassword(getSignupFormPasswordValue(getState())))
  dispatch(validateName(getSignupFormNameValue(getState())))

  const untouchedFields = getSignupFormUntouchedFields(getState())

  const touchedFieldsWithErrors = getSignupFormTouchedFields(getState())
    .filter(one => one.errors && one.errors.length > 0)

  if (untouchedFields.length > 0 || touchedFieldsWithErrors.length > 0) {
    dispatch(setSignupFormErrors([ SIGNUP_FORM_ERROR ]))
    return
  }

  dispatch(setSignupFormErrors([]))
}

export const addNewUser = () => async (dispatch, getState: () => IState) => {
  const state = getState()

  alert('check console for new user params')
  console.log({
    id: uuid4(),
    email: getSignupFormEmailValue(state),
    password: getSignupFormPasswordValue(state),
    name: getSignupFormNameValue(state),
    createdAt: getNowUnixTime()
  })
}
