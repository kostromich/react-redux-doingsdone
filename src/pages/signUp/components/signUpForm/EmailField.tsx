import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Field from 'components/form/Field'
import {
  setSignUpFormEmailTouched,
  setSignUpFormEmailValue,
  validateEmail
} from 'modules/signUpForm'
import { getSignUpFormEmail } from 'selectors'

const EmailField: React.FC = () => {
  const dispatch = useDispatch()

  const fieldState = useSelector(getSignUpFormEmail)
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
      changeHandler={e => dispatch(setSignUpFormEmailValue(e.currentTarget.value))}
      blurHandler={e => dispatch(validateEmail(e.currentTarget.value))}
      touchHandler={() => dispatch(setSignUpFormEmailTouched(true))}
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
