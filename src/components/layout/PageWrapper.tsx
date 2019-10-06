import React from 'react'
import cx from 'classnames'
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles({
  root: {
    minHeight: '100%',
    marginBottom: -120,
    display: 'flex',
    '&::after': {
      display: 'block',
      content: '""',
      height: 94
    }
  }
})

interface IOwnProps {
  className?: string
}

const PageWrapper: React.FC<IOwnProps> = ({
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

export default PageWrapper
