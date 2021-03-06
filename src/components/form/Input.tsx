import React from 'react'
import cx from 'classnames'
import makeStyles from '@material-ui/core/styles/makeStyles'
import ErrorMessage from './ErrorMessage'

const useStyles = makeStyles({
  root: {
    boxSizing: 'border-box',
    width: '100%',
    padding: '15px 20px',
    border: '1px solid #d7dbe8',
    borderRadius: 3,
    '-webkit-appearance': 'none',
    '-moz-appearance': 'none',
    appearance: 'none'
  },
  error: {
    background: 'transparent url(img/icon-error.png) no-repeat right 10px top 50%',
    borderColor: '#f84646'
  },
  errorMessage: {
    margin: '2px 0 0 0 ',
    fontSize: 11,
    height: 11
  }
})

export interface IInputProps extends React.HTMLProps<HTMLInputElement> {
  id: string
  name: string
  className?: string
  errorMessage?: string
}

const Input: React.FC<IInputProps> = ({
  className,
  errorMessage,
  ...inputProps
}) => {
  const classes = useStyles({})

  return (
    <>
      <input
        className={cx(classes.root, errorMessage ? classes.error : '')}
        {...inputProps}
      />
      <ErrorMessage className={classes.errorMessage}>
        {errorMessage}
      </ErrorMessage>
    </>
  )
}

export default Input
