import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Form from 'components/form/Form'
import FormRowControls from 'components/form/FormRowControls'
import EmailField from './EmailField'
import PasswordField from './PasswordField'
import NameField from './NameField'
import { addNewUser, clearSignupForm, validateSignupForm } from 'modules/signupForm'
import { getSignupFormErrors } from 'selectors'

const SignupForm: React.FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(clearSignupForm())
  }, [ dispatch ])

  const errorMessage = useSelector(getSignupFormErrors)

  const onFormSubmit = () => {
    dispatch(validateSignupForm())

    if (!errorMessage) {
      dispatch(addNewUser())
    }
  }

  return (
    <Form autoComplete='off'>
      <EmailField />

      <PasswordField />

      <NameField />

      <FormRowControls
        errorMessage={errorMessage}
        onFormSubmit={onFormSubmit}
      />
    </Form>
  )
}

export default SignupForm
