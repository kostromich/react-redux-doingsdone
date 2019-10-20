import React from 'react'
import cx from 'classnames'
import makeStyles from '@material-ui/core/styles/makeStyles'
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
}

const FormRowControls: React.FC<IOwnProps> = ({ className, errorMessage }) => {
  const classes = useStyles({})
  console.log(errorMessage)
  return (
    <FormRow className={cx(classes.root, className)}>
      {errorMessage &&
        <ErrorMessage>{errorMessage}</ErrorMessage>
      }
      <input className='button' type='submit' name='' value='Зарегистрироваться' />
    </FormRow>
  )
}

export default FormRowControls
