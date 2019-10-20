import React from 'react'
import cx from 'classnames'
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles({
  root: {
    marginBottom: 25
  }
})

export interface IFormRowProps {
  className?: string
}

const FormRow: React.FC<IFormRowProps> = ({
  className,
  children
}) => {
  const classes = useStyles({})
  return (
    <div className={cx(classes.root, className)}>
      {children}
    </div>
  )
}

export default FormRow
