import * as types from './types'
import { IAddProjectFormState, IFormFieldState } from 'types'

const initialFormFieldState: IFormFieldState = {
  isTouched: false,
  value: undefined,
  errors: []
}

const initialState: IAddProjectFormState = {
  errors: [],
  fields: {
    title: initialFormFieldState
  }
}

export default (state: IAddProjectFormState = initialState, { type, payload }) => {
  switch (type) {
    case types.SET_ADD_PROJECT_FORM_TITLE_TOUCHED: {
      return {
        ...state,
        fields: {
          ...state.fields,
          title: {
            ...state.fields.title,
            isTouched: payload
          }
        }
      }
    }

    case types.SET_ADD_PROJECT_FORM_TITLE_VALUE: {
      return {
        ...state,
        fields: {
          ...state.fields,
          title: {
            ...state.fields.title,
            value: payload
          }
        }
      }
    }

    case types.SET_ADD_PROJECT_FORM_TITLE_ERRORS: {
      return {
        ...state,
        fields: {
          ...state.fields,
          title: {
            ...state.fields.title,
            errors: payload
          }
        }
      }
    }

    case types.SET_ADD_PROJECT_FORM_ERRORS: {
      return {
        ...state,
        errors: payload
      }
    }

    case types.CLEAR_ADD_PROJECT_FORM: {
      return {
        ...state,
        ...initialState
      }
    }

    default:
      return state
  }
}
