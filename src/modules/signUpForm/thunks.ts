import db from 'db'
import { push } from 'connected-react-router'
import {
  setSignUpFormNameErrors,
  setSignUpFormEmailErrors,
  setSignUpFormPasswordErrors,
  setSignUpFormErrors,
  setSignUpFormEmailTouched,
  setSignUpFormPasswordTouched,
  setSignUpFormNameTouched
} from './actions'
import {
  getSignUpFormEmailValue,
  getSignUpFormFieldsErrors,
  getSignUpFormNameValue,
  getSignUpFormPasswordValue,
  getSignUpFormUser
} from './selectors'
import {
  emailValidator,
  nameValidator,
  passwordValidator,
  FORM_ERROR,
  EMAIL_ERROR_DUPLICATE
} from 'helpers/validators'
import { ROUTE_SIGN_IN_PAGE } from 'routes'
import { IState } from 'types'

export const validateName = (title: string) => async dispatch => {
  const errors = nameValidator(title)

  dispatch(setSignUpFormNameErrors(errors))
  dispatch(updateSignUpFormErrors())
}

export const validateEmail = (email: string) => async dispatch => {
  const errors = emailValidator(email)

  dispatch(setSignUpFormEmailErrors(errors))
  dispatch(updateSignUpFormErrors())
}

export const validatePassword = (password: string) => async dispatch => {
  const errors = passwordValidator(password)

  dispatch(setSignUpFormPasswordErrors(errors))
  dispatch(updateSignUpFormErrors())
}

export const validateSignUpForm = () => async (dispatch, getState: () => IState) => {
  dispatch(setSignUpFormEmailTouched(true))
  dispatch(validateEmail(getSignUpFormEmailValue(getState())))

  dispatch(setSignUpFormPasswordTouched(true))
  dispatch(validatePassword(getSignUpFormPasswordValue(getState())))

  dispatch(setSignUpFormNameTouched(true))
  dispatch(validateName(getSignUpFormNameValue(getState())))

  dispatch(updateSignUpFormErrors())
}

export const updateSignUpFormErrors = () => async (dispatch, getState: () => IState) => {
  const formFieldsErrors = getSignUpFormFieldsErrors(getState())

  if (formFieldsErrors.length > 0) {
    dispatch(setSignUpFormErrors([ FORM_ERROR ]))
  } else {
    dispatch(setSignUpFormErrors([]))
  }
}

export const signUpUser = () => async (dispatch, getState: () => IState) => {
  const user = getSignUpFormUser(getState())

  const existsUser = await db.getUserByEmail(user.email)

  if (existsUser) {
    dispatch(setSignUpFormEmailErrors([ EMAIL_ERROR_DUPLICATE ]))
    dispatch(updateSignUpFormErrors())
    return
  }

  try {
    await db.insertUser(user)
    dispatch(push(ROUTE_SIGN_IN_PAGE))
  } catch (e) {
    console.log(e)
  }
}
