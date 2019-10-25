import React, { FormEvent } from 'react'
import cx from 'classnames'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Button from 'components/buttons/Button'
import ErrorMessage from './ErrorMessage'
import FormRow, { IFormRowProps } from './FormRow'

const useStyles = makeStyles({
  root: {
    marginTop: 60,
    marginBottom: 0
  }
})

interface IOwnProps extends IFormRowProps {
  errorMessage?: string
  onFormSubmit: () => void
}

const FormRowControls: React.FC<IOwnProps> = ({
  className,
  errorMessage,
  onFormSubmit
}) => {
  const classes = useStyles({})

  return (
    <FormRow className={cx(classes.root, className)}>
      {errorMessage &&
        <ErrorMessage>{errorMessage}</ErrorMessage>
      }
      <Button
        onClick={(e: FormEvent<HTMLButtonElement>) => {
          e.preventDefault()
          onFormSubmit()
        }}
        type='submit'
        name='submit'
        value='Зарегистрироваться'
      >
        Зарегистрироваться
      </Button>
    </FormRow>
  )
}

export default FormRowControls