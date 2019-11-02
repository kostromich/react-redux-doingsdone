import * as types from './types'
import { ISignupFormState, IFormFieldState } from 'types'

const initialFormFieldState: IFormFieldState = {
  isTouched: false,
  value: undefined,
  errors: []
}

const initialState: ISignupFormState = {
  errors: [],
  fields: {
    name: initialFormFieldState,
    password: initialFormFieldState,
    email: initialFormFieldState
  }
}

export default (state: ISignupFormState = initialState, { type, payload }) => {
  switch (type) {
    case types.SET_SIGNUP_FORM_NAME_TOUCHED: {
      return {
        ...state,
        fields: {
          ...state.fields,
          name: {
            ...state.fields.name,
            isTouched: payload
          }
        }
      }
    }

    case types.SET_SIGNUP_FORM_NAME_VALUE: {
      return {
        ...state,
        fields: {
          ...state.fields,
          name: {
            ...state.fields.name,
            value: payload
          }
        }
      }
    }

    case types.SET_SIGNUP_FORM_NAME_ERRORS: {
      return {
        ...state,
        fields: {
          ...state.fields,
          name: {
            ...state.fields.name,
            errors: payload
          }
        }
      }
    }

    case types.SET_SIGNUP_FORM_PASSWORD_TOUCHED: {
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

    case types.SET_SIGNUP_FORM_PASSWORD_VALUE: {
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

    case types.SET_SIGNUP_FORM_PASSWORD_ERRORS: {
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

    case types.SET_SIGNUP_FORM_EMAIL_TOUCHED: {
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

    case types.SET_SIGNUP_FORM_EMAIL_VALUE: {
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

    case types.SET_SIGNUP_FORM_EMAIL_ERRORS: {
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

    case types.SET_SIGNUP_FORM_ERRORS: {
      return {
        ...state,
        errors: payload
      }
    }

    case types.CLEAR_SIGNUP_FORM: {
      return {
        ...state,
        ...initialState
      }
    }

    default:
      return state
  }
}
