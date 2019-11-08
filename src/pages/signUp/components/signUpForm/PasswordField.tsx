import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Field, { IFieldProps } from 'components/form/Field'
import {
  setSignUpFormPasswordTouched,
  setSignUpFormPasswordValue,
  validatePassword
} from 'modules/signUpForm'
import { getSignUpFormPassword } from 'selectors'

interface IOwnProps extends Partial<IFieldProps> {}

const PasswordField: React.FC<IOwnProps> = props => {
  const dispatch = useDispatch()

  const {
    value: password = '',
    errors = [],
    isTouched
  } = useSelector(getSignUpFormPassword)

  React.useEffect(() => {
    dispatch(validatePassword(password))
  }, [ password, dispatch ])

  return (
    <Field
      {...props}
      changeHandler={e => dispatch(setSignUpFormPasswordValue(e.currentTarget.value))}
      blurHandler={e => dispatch(validatePassword(e.currentTarget.value))}
      touchHandler={() => dispatch(setSignUpFormPasswordTouched(true))}
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
