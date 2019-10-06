import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import TasksSwitch from './tasksSwitch/TasksSwitch'
import CompletedTasksVisibilitySwitcher from './CompletedTasksVisibilitySwitcher'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 19,
    fontSize: 13
  }
})

const TasksControls: React.FC = () => {
  const classes = useStyles({})

  return (
    <div className={classes.root}>
      <TasksSwitch />
      <CompletedTasksVisibilitySwitcher />
    </div>
  )
}

export default TasksControls
