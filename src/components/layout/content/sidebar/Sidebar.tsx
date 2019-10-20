import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Header from './Header'

const useStyles = makeStyles({
  root: {
    width: 260
  }
})

interface IOwnProps {
  header?: string
  content: React.ReactNode
}

const Sidebar: React.FC<IOwnProps> = ({ header, content }) => {
  const classes = useStyles({})

  return (
    <section className={classes.root}>
      {header &&
      <Header>
        {header}
      </Header>
      }
      {content}
    </section>
  )
}

export default Sidebar
