import makeStyles from '@material-ui/core/styles/makeStyles'
import React from 'react'
import Checkbox from 'components/checkbox/Checkbox'
import { getRandomInt } from 'helpers'

const useStyles = makeStyles({
  checkboxText: {
    paddingTop: 3,
    paddingBottom: 3
  }
})

const CompletedTasksVisibilitySwitcher: React.FC = () => {
  const classes = useStyles({})

  const isChecked = !!getRandomInt(0, 1)

  return (
    <Checkbox
      checkboxText='Показывать выполненные'
      checkboxTextClassName={classes.checkboxText}
      isChecked={isChecked}
    />
  )
}

export default CompletedTasksVisibilitySwitcher
