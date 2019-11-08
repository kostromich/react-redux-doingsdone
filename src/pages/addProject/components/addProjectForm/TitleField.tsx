import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Field from 'components/form/Field'
import {
  setAddProjectFormTitleTouched,
  setAddProjectFormTitleValue,
  validateTitle
} from 'modules/addProjectForm'
import { getAddProjectFormTitle } from 'selectors'

const TitleField: React.FC = () => {
  const dispatch = useDispatch()

  const fieldState = useSelector(getAddProjectFormTitle)
  const {
    value: email = '',
    errors = [],
    isTouched
  } = fieldState

  React.useEffect(() => {
    dispatch(validateTitle(email))
  }, [ email, dispatch ])

  return (
    <Field
      changeHandler={e => dispatch(setAddProjectFormTitleValue(e.currentTarget.value))}
      blurHandler={e => dispatch(validateTitle(e.currentTarget.value))}
      touchHandler={() => dispatch(setAddProjectFormTitleTouched(true))}
      isRequired={true}
      labelText='Название'
      id='title'
      name='title'
      type='text'
      placeholder='Введите название проекта'
      value={email}
      errorMessage={isTouched && errors.join(', ')}
    />
  )
}

export default TitleField
