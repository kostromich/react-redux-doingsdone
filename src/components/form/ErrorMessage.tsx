import React from 'react'
import cx from 'classnames'
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles({
  root: {
    color: '#f84646'
  }
})

interface IOwnProps {
  className?: string
}

const ErrorMessage: React.FC<IOwnProps> = ({ className, children }) => {
  const classes = useStyles({})

  return (
    <p className={cx(classes.root, className)}>
      {children}
    </p>
  )
}

export default ErrorMessage
