import * as types from './types'
import { ISignInFormState, IFormFieldState } from 'types'

const initialFormFieldState: IFormFieldState = {
  isTouched: false,
  value: undefined,
  errors: []
}

const initialState: ISignInFormState = {
  errors: [],
  fields: {
    email: initialFormFieldState,
    password: initialFormFieldState
  }
}

export default (state: ISignInFormState = initialState, { type, payload }) => {
  switch (type) {
    case types.SET_SIGN_IN_FORM_PASSWORD_TOUCHED: {
      return {
        ...state,
        fields: {
          ...state.fields,
          password: {
            ...state.fields.password,
            isTouched: payload
          }
        }
      }
    }

    case types.SET_SIGN_IN_FORM_PASSWORD_VALUE: {
      return {
        ...state,
        fields: {
          ...state.fields,
          password: {
            ...state.fields.password,
            value: payload
          }
        }
      }
    }

    case types.SET_SIGN_IN_FORM_PASSWORD_ERRORS: {
      return {
        ...state,
        fields: {
          ...state.fields,
          password: {
            ...state.fields.password,
            errors: payload
          }
        }
      }
    }

    case types.SET_SIGN_IN_FORM_EMAIL_TOUCHED: {
      return {
        ...state,
        fields: {
          ...state.fields,
          email: {
            ...state.fields.email,
            isTouched: payload
          }
        }
      }
    }

    case types.SET_SIGN_IN_FORM_EMAIL_VALUE: {
      return {
        ...state,
        fields: {
          ...state.fields,
          email: {
            ...state.fields.email,
            value: payload
          }
        }
      }
    }

    case types.SET_SIGN_IN_FORM_EMAIL_ERRORS: {
      return {
        ...state,
        fields: {
          ...state.fields,
          email: {
            ...state.fields.email,
            errors: payload
          }
        }
      }
    }

    case types.SET_SIGN_IN_FORM_ERRORS: {
      return {
        ...state,
        errors: payload
      }
    }

    case types.CLEAR_SIGN_IN_FORM: {
      return {
        ...state,
        ...initialState
      }
    }

    default:
      return state
  }
}
