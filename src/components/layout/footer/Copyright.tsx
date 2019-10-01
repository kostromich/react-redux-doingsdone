import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles({
  root: {
    width: 215,
    marginRight: 70,
    fontSize: 13,
    lineHeight: 1.5
  }
})

const Copyright: React.FC = () => {
  const classes = useStyles({})

  return (
    <div className={classes.root}>
      <p>© 2019, «Дела в порядке»</p>

      <p>Веб-приложение для удобного ведения списка дел.</p>
    </div>
  )
}

export default Copyright
