import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Field from 'components/form/Field'
import {
  setSignupFormNameTouched,
  setSignupFormNameValue,
  validateName
} from 'modules/signupForm'
import { getSignupFormName } from 'selectors'

const NameField: React.FC = () => {
  const dispatch = useDispatch()

  const {
    value: name = '',
    errors = []
  } = useSelector(getSignupFormName)

  return (
    <Field
      changeHandler={e => dispatch(setSignupFormNameValue(e.currentTarget.value))}
      blurHandler={e => dispatch(validateName(e.currentTarget.value))}
      touchHandler={() => dispatch(setSignupFormNameTouched())}
      isRequired={true}
      labelText='Имя'
      id='name'
      name='name'
      type='text'
      placeholder='Введите имя'
      value={name}
      errorMessage={errors.join(', ')}
    />
  )
}

export default NameField
