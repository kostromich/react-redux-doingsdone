import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles({
  root: {
    width: 260
  }
})

const SidebarContent: React.FC = ({ children }) => {
  const classes = useStyles({})

  return (
    <section className={classes.root}>
      {children}
    </section>
  )
}

export default SidebarContent
