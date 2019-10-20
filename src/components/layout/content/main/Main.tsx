import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Header from './Header'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    padding: '0 30px 0 27px'
  }
})

interface IOwnProps {
  header?: string
  content: React.ReactNode
}

const Main: React.FC<IOwnProps> = ({ header, content }) => {
  const classes = useStyles({})

  return (
    <main className={classes.root}>
      {header &&
        <Header>
          {header}
        </Header>
      }
      {content}
    </main>
  )
}

export default Main
