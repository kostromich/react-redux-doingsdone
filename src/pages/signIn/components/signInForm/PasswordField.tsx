import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Field, { IFieldProps } from 'components/form/Field'
import {
  setSignInFormPasswordTouched,
  setSignInFormPasswordValue,
  validatePassword
} from 'modules/signInForm'
import { getSignInFormPassword } from 'selectors'

interface IOwnProps extends Partial<IFieldProps> {}

const PasswordField: React.FC<IOwnProps> = props => {
  const dispatch = useDispatch()

  const {
    value: password = '',
    errors = [],
    isTouched
  } = useSelector(getSignInFormPassword)

  React.useEffect(() => {
    dispatch(validatePassword(password))
  }, [ password, dispatch ])

  return (
    <Field
      {...props}
      changeHandler={e => dispatch(setSignInFormPasswordValue(e.currentTarget.value))}
      blurHandler={e => dispatch(validatePassword(e.currentTarget.value))}
      touchHandler={() => dispatch(setSignInFormPasswordTouched(true))}
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
