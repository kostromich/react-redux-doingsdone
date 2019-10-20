import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    marginRight: 22
  }
})

const HeaderSide: React.FC = ({ children }) => {
  const classes = useStyles({})

  return (
    <div className={classes.root}>
      {children}
    </div>
  )
}

export default HeaderSide
