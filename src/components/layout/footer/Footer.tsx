import Developed from 'components/layout/footer/Developed'
import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Container from 'components/layout/Container'
import Copyright from 'components/layout/footer/Copyright'
import Socials from 'components/layout/footer/Socials'

const useStyles = makeStyles({
  root: {
    height: 94,
    position: 'relative',
    padding: '13px 0',
    backgroundColor: '#d7dbe8'
  },
  container: {
    display: 'flex',
    alignItems: 'center'
  }
})

const Footer: React.FC = () => {
  const classes = useStyles({})

  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <Copyright />
        <Socials />
        <Developed />
      </Container>
    </div>
  )
}

export default Footer
