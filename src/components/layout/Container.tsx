import React from 'react'
import cx from 'classnames'
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles({
  root: {
    width: 1140,
    margin: '0 auto',
    padding: '0 20px'
  }
})

interface IOwnProps {
  className?: string
}

const Container: React.FC<IOwnProps> = ({ className, children }) => {
  const classes = useStyles({})

  return (
    <div className={cx(classes.root, className)}>
      {children}
    </div>
  )
}

export default Container
