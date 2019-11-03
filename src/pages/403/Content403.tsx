import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import SignInLinkButton from 'components/buttons/SignInLinkButton'
import SignUpLinkButton from 'components/buttons/SignUpLinkButton'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  buttons: {
    marginTop: 20,
    display: 'flex'
  },
  button: {
    flex: 'none',
    '&:first-child': {
      marginRight: 20
    }
  }
})

const Content403: React.FC = () => {
  const classes = useStyles({})

  return (
    <div className={classes.root}>
      <h1>403 Доступ запрещён</h1>
      <div className={classes.buttons}>
        <SignInLinkButton variant='transparent' className={classes.button} />
        <SignUpLinkButton variant='transparent' className={classes.button} />
      </div>
    </div>
  )
}

export default Content403
