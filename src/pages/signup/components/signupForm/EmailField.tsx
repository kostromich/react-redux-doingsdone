import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Field from 'components/form/Field'
import {
  setSignupFormEmailTouched,
  setSignupFormEmailValue,
  validateEmail
} from 'modules/signupForm'
import { getSignupFormEmail } from 'selectors'

const EmailField: React.FC = () => {
  const dispatch = useDispatch()

  const fieldState = useSelector(getSignupFormEmail)
  const {
    value: email = '',
    errors = [],
    isTouched
  } = fieldState

  React.useEffect(() => {
    dispatch(validateEmail(email))
  }, [ email, dispatch ])

  return (
    <Field
      changeHandler={e => dispatch(setSignupFormEmailValue(e.currentTarget.value))}
      blurHandler={e => dispatch(validateEmail(e.currentTarget.value))}
      focusHandler={() => dispatch(setSignupFormEmailTouched(false))}
      touchHandler={() => dispatch(setSignupFormEmailTouched(true))}
      isRequired={true}
      labelText='E-mail'
      id='email'
      name='email'
      type='email'
      placeholder='Введите email'
      value={email}
      errorMessage={isTouched && errors.join(', ')}
    />
  )
}

export default EmailField
