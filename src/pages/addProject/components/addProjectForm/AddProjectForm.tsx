import React, { FormEvent, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Form from 'components/form/Form'
import TitleField from './TitleField'
import Button from 'components/buttons/Button'
import FormRowControls from 'components/form/FormRowControls'
import {
  clearAddProjectForm,
  validateAddProjectForm,
  saveProject
} from 'modules/addProjectForm'
import {
  getAddProjectFormErrors,
  getAddProjectFormTouched
} from 'selectors'

const AddProjectForm: React.FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(clearAddProjectForm())
  }, [ dispatch ])

  const formErrors = useSelector(getAddProjectFormErrors)
  const isFormTouched = useSelector(getAddProjectFormTouched)

  const onFormSubmit = () => {
    dispatch(validateAddProjectForm())

    if (formErrors.length === 0 && isFormTouched) {
      dispatch(saveProject())
    }
  }
  return (
    <>
      <Form autoComplete='off'>
        <TitleField />

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
      </>
  )
}

export default AddProjectForm
