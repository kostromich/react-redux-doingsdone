import React from 'react'
import cx from 'classnames'
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles({
  root: {
    width: 1140,
    margin: '0 auto',
    padding: '0 20px'
  },
  side: {},
  main: {}
})

interface IOwnProps {
  className?: string
  withSidebar?: boolean
}

const Container: React.FC<IOwnProps> = ({
  className,
  children,
                                          withSidebar = false
}) => {
  const classes = useStyles({})

  return (
    <div className={cx(classes.root, className)}>
      {children}
    </div>
  )
}

export default Container
