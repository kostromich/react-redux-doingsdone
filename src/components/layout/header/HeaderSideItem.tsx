import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles({
  root: {
    marginLeft: 30
  }
})

const HeaderSideItem: React.FC = ({ children }) => {
  const classes = useStyles({})

  return (
    <div className={classes.root}>
      {children}
    </div>
  )
}

export default HeaderSideItem
