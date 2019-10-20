import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    marginBottom: 120
  }
})

const Content: React.FC = ({ children }) => {
  const classes = useStyles({})

  return (
    <div className={classes.root}>
      {children}
    </div>
  )
}

export default Content
