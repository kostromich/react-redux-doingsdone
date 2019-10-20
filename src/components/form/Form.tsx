import makeStyles from '@material-ui/core/styles/makeStyles'
import React from 'react'
import cx from 'classnames'

const useStyles = makeStyles({
  root: {
    maxWidth: 445
  }
})

interface IOwnProps extends React.HTMLProps<HTMLFormElement> {
  className?: string
}

const Form: React.FC<IOwnProps> = ({ className, children, ...formProps }) => {
  const classes = useStyles({})

  return (
    <form className={cx(classes.root, className)} {...formProps}>
      {children}
    </form>
  )
}

export default Form
