import React from 'react'
import cx from 'classnames'
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles({
  root: {
    margin: '0 0 15px 0'
  }
})

interface IOwnProps {
  className?: string
}

const SidebarHeader: React.FC<IOwnProps> = ({ className, children }) => {
  const classes = useStyles({})

  return (
    <h2 className={cx(classes.root, className)}>
      {children}
    </h2>
  )
}

export default SidebarHeader
