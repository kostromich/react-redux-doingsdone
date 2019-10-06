import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import AllTasks from './AllTasks'
import OverdueTasks from './OverdueTasks'
import TodayTasks from './TodayTasks'
import TomorrowTasks from './TomorrowTasks'

const useStyles = makeStyles({
  root: {
    display: 'inline-flex',
    flexWrap: 'nowrap',
    fontSize: 13,
    '&:first-child': {
      borderTopLeftRadius: 3,
      borderBottomLeftRadius: 3
    },
    '&:last-child': {
      borderTopRightRadius: 3,
      borderBottomRightRadius: 3
    }
  }
})

const TasksSwitch: React.FC = () => {
  const classes = useStyles({})

  return (
    <nav className={classes.root}>
      <AllTasks />
      <TodayTasks />
      <TomorrowTasks />
      <OverdueTasks />
    </nav>
  )
}

export default TasksSwitch
