import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Form from 'components/form/Form'
import FormRowControls from 'components/form/FormRowControls'
import EmailField from './EmailField'
import PasswordField from './PasswordField'
import NameField from './NameField'
import { addNewUser, clearSignUpForm, validateSignUpForm } from 'modules/signUpForm'
import { getSignUpFormErrors, getSignUpFormTouched } from 'selectors'

const SignUpForm: React.FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(clearSignUpForm())
  }, [ dispatch ])

  const formErrors = useSelector(getSignUpFormErrors)
  const isFormTouched = useSelector(getSignUpFormTouched)

  const onFormSubmit = () => {
    dispatch(validateSignUpForm())

    if (formErrors.length === 0 && isFormTouched) {
      dispatch(addNewUser())
    }
  }

  return (
    <Form autoComplete='off'>
      <EmailField />

      <PasswordField />

      <NameField />

      <FormRowControls
        errorMessage={isFormTouched && formErrors.join(', ')}
        onFormSubmit={onFormSubmit}
      />
    </Form>
  )
}

export default SignUpForm
