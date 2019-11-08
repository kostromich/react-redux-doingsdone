import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Form from 'components/form/Form'
import EmailField from './EmailField'
import PasswordField from './PasswordField'
import NameField from './NameField'
import FormRowControls from 'components/form/FormRowControls'
import Button from 'components/buttons/Button'
import { signUpUser, clearSignUpForm, validateSignUpForm } from 'modules/signUpForm'
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
      dispatch(signUpUser())
    }
  }

  return (
    <Form autoComplete='off'>
      <EmailField autoFocus={true} />

      <PasswordField />

      <NameField />

      <FormRowControls
        errorMessage={isFormTouched && formErrors.join(', ')}
        submitButton={
          <Button
            onClick={(e: React.FormEvent<HTMLButtonElement>) => {
              e.preventDefault()
              onFormSubmit()
            }}
            type='submit'
            name='submit'
            value='Зарегистрироваться'
          >
            Зарегистрироваться
          </Button>
        }
      />
    </Form>
  )
}

export default SignUpForm
