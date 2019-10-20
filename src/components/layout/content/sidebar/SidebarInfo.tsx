import React from 'react'
import cx from 'classnames'
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles({
  root: {
    marginTop: 5,
    marginBottom: 30,
    fontSize: 13,
    lineHeight: 1.5
  }
})

interface IOwnProps {
  className?: string
}

const SidebarInfo: React.FC<IOwnProps> = ({ className, children }) => {
  const classes = useStyles({})

  return (
    <p className={cx(classes.root, className)}>
      {children}
    </p>
  )
}

export default SidebarInfo
