import db from 'db'
import { push } from 'connected-react-router'
import { initApplication, setUser } from 'modules/global'
import {
  setSignInFormEmailErrors,
  setSignInFormPasswordErrors,
  setSignInFormErrors,
  setSignInFormEmailTouched,
  setSignInFormPasswordTouched
} from './actions'
import {
  getSignInFormEmailValue,
  getSignInFormFieldsErrors,
  getSignInFormPasswordValue,
  getUserCredentials
} from './selectors'
import {
  emailValidator,
  passwordValidator,
  FORM_ERROR,
  USER_ERROR_NOT_FOUND
} from 'helpers/validators'
import { ROUTE_HOME_PAGE } from 'routes'
import { IState } from 'types'

export const validateEmail = (email: string) => async dispatch => {
  const errors = emailValidator(email)

  dispatch(setSignInFormEmailErrors(errors))
  dispatch(updateSignInFormErrors())
}

export const validatePassword = (password: string) => async dispatch => {
  const errors = passwordValidator(password)

  dispatch(setSignInFormPasswordErrors(errors))
  dispatch(updateSignInFormErrors())
}

export const validateSignInForm = () => async (dispatch, getState: () => IState) => {
  dispatch(setSignInFormEmailTouched(true))
  dispatch(validateEmail(getSignInFormEmailValue(getState())))

  dispatch(setSignInFormPasswordTouched(true))
  dispatch(validatePassword(getSignInFormPasswordValue(getState())))

  dispatch(updateSignInFormErrors())
}

export const updateSignInFormErrors = () => async (dispatch, getState: () => IState) => {
  const formFieldsErrors = getSignInFormFieldsErrors(getState())

  if (formFieldsErrors.length > 0) {
    dispatch(setSignInFormErrors([ FORM_ERROR ]))
  } else {
    dispatch(setSignInFormErrors([]))
  }
}

export const signInUser = () => async (dispatch, getState: () => IState) => {
  const user = await db.getUserByCredentials(getUserCredentials(getState()))

  if (!user) {
    dispatch(setSignInFormEmailErrors([ USER_ERROR_NOT_FOUND ]))
    dispatch(updateSignInFormErrors())
    return
  }

  window.sessionStorage.setItem('user', JSON.stringify(user))
  dispatch(setUser(user))
  dispatch(push(ROUTE_HOME_PAGE))
  dispatch(initApplication())
}
