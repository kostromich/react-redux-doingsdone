import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Layout from 'components/layout/Layout'
import Welcome from './components/Welcome'

const useStyles = makeStyles({
  body: {
    background: '#ffffff url(img/background.jpg) no-repeat 0 0',
    backgroundSize: 'cover'
  }
})

const GuestPage: React.FC = () => {
  const classes = useStyles()

  return (
    <Layout
      bodyClassName={classes.body}
      mainContent={<Welcome />}
    />
  )
}

export default GuestPage
