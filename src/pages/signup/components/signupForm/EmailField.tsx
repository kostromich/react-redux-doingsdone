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

  const {
    value: email = '',
    errors = []
  } = useSelector(getSignupFormEmail)

  return (
    <Field
      changeHandler={e => dispatch(setSignupFormEmailValue(e.currentTarget.value))}
      blurHandler={e => dispatch(validateEmail(e.currentTarget.value))}
      touchHandler={() => dispatch(setSignupFormEmailTouched())}
      isRequired={true}
      labelText='E-mail'
      id='email'
      name='email'
      type='email'
      placeholder='Введите email'
      value={email}
      errorMessage={errors.join(', ')}
    />
  )
}

export default EmailField
