import React, { FormEvent, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Form from 'components/form/Form'
import EmailField from './EmailField'
import PasswordField from './PasswordField'
import FormRowControls from 'components/form/FormRowControls'
import Button from 'components/buttons/Button'
import { signInUser, clearSignInForm, validateSignInForm } from 'modules/signInForm'
import { getSignInFormErrors, getSignInFormTouched } from 'selectors'

const SignInForm: React.FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(clearSignInForm())
  }, [ dispatch ])

  const formErrors = useSelector(getSignInFormErrors)
  const isFormTouched = useSelector(getSignInFormTouched)

  const onFormSubmit = () => {
    dispatch(validateSignInForm())

    if (formErrors.length === 0 && isFormTouched) {
      dispatch(signInUser())
    }
  }

  return (
    <Form autoComplete='off'>
      <EmailField autoFocus={true} />

      <PasswordField />

      <FormRowControls
        errorMessage={isFormTouched && formErrors.join(', ')}
        submitButton={
          <Button
            onClick={(e: FormEvent<HTMLButtonElement>) => {
              e.preventDefault()
              onFormSubmit()
            }}
            type='submit'
            name='submit'
            value='Войти'
          >
            Войти
          </Button>
        }
      />
    </Form>
  )
}

export default SignInForm
