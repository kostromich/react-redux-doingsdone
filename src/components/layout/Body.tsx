import React from 'react'
import cx from 'classnames'
import makeStyles from '@material-ui/core/styles/makeStyles'
import useHiddenContentStyles from 'hooks/useHiddenContentStyles'

const useStyles = makeStyles({
  root: {
    minHeight: '100%',
    height: '100%',
    position: 'relative',
    minWidth: 1180,
    color: '#31313a'
  }
})

interface IOwnProps {
  className?: string
}

const Body: React.FC<IOwnProps> = ({
  className,
  children
}) => {
  const classes = useStyles({})
  const hiddenContentClasses = useHiddenContentStyles({})

  return (
    <div className={cx(classes.root, className)}>
      <h1 className={hiddenContentClasses.root}>Дела в порядке</h1>
      {children}
    </div>
  )
}

export default Body
