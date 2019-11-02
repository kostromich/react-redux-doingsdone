import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Field from 'components/form/Field'
import {
  setSignUpFormNameTouched,
  setSignUpFormNameValue,
  validateName
} from 'modules/signUpForm'
import { getSignUpFormName } from 'selectors'

const NameField: React.FC = () => {
  const dispatch = useDispatch()

  const {
    value: name = '',
    errors = [],
    isTouched
  } = useSelector(getSignUpFormName)

  React.useEffect(() => {
    dispatch(validateName(name))
  }, [ name, dispatch ])

  return (
    <Field
      changeHandler={e => dispatch(setSignUpFormNameValue(e.currentTarget.value))}
      blurHandler={e => dispatch(validateName(e.currentTarget.value))}
      touchHandler={() => dispatch(setSignUpFormNameTouched(true))}
      isRequired={true}
      labelText='Имя'
      id='name'
      name='name'
      type='text'
      placeholder='Введите имя'
      value={name}
      errorMessage={isTouched && errors.join(', ')}
    />
  )
}

export default NameField
