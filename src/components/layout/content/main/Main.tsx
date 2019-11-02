import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import MainHeader from './MainHeader'

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
        <MainHeader>
          {header}
        </MainHeader>
      }
      {content}
    </main>
  )
}

export default Main
