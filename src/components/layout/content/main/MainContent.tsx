import React from 'react'
import cx from 'classnames'
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    padding: '0 30px 0 27px'
  }
})

interface IOwnProps {
  className?: string
}

const MainContent: React.FC<IOwnProps> = ({ className, children }) => {
  const classes = useStyles({})

  return (
    <main className={cx(classes.root, className)}>
      {children}
    </main>
  )
}

export default MainContent
