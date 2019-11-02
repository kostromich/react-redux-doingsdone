import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Field from 'components/form/Field'
import {
  setSignupFormPasswordTouched,
  setSignupFormPasswordValue,
  validatePassword
} from 'modules/signupForm'
import { getSignupFormPassword } from 'selectors'

const PasswordField: React.FC = () => {
  const dispatch = useDispatch()

  const {
    value: password = '',
    errors = [],
    isTouched
  } = useSelector(getSignupFormPassword)

  React.useEffect(() => {
    dispatch(validatePassword(password))
  }, [ password, dispatch ])

  return (
    <Field
      changeHandler={e => dispatch(setSignupFormPasswordValue(e.currentTarget.value))}
      blurHandler={e => dispatch(validatePassword(e.currentTarget.value))}
      focusHandler={() => dispatch(setSignupFormPasswordTouched(false))}
      touchHandler={() => dispatch(setSignupFormPasswordTouched(true))}
      isRequired={true}
      labelText='Пароль'
      id='password'
      name='password'
      type='password'
      placeholder='Введите пароль'
      value={password}
      errorMessage={isTouched && errors.join(', ')}
    />
  )
}

export default PasswordField
