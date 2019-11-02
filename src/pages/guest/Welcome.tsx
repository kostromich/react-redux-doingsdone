import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import SignUpLinkButton from 'components/buttons/SignUpLinkButton'

const useStyles = makeStyles({
  root: {
    width: 540,
    margin: '75px auto 0',
    textAlign: 'center'
  },
  header: {
    marginBottom: 20,
    fontSize: 38
  },
  text: {
    marginBottom: 50,
    fontSize: 16,
    lineHeight: 1.8,
    '& p': {
      margin: '20px 0'
    }
  },
  registerButton: {

  }
})

const Welcome: React.FC = () => {
  const classes = useStyles({})

  return (
    <div className={classes.root}>
      <h2 className={classes.header}>«Дела в порядке»</h2>
      <div className={classes.text}>
        <p>«Дела в порядке» — это веб приложение для удобного ведения списка дел. Сервис помогает пользователям не забывать о предстоящих важных событиях и задачах.</p>

        <p>После создания аккаунта, пользователь может начать вносить свои дела, деля их по проектам и указывая сроки.</p>
      </div>
      <SignUpLinkButton />
    </div>
  )
}

export default Welcome
