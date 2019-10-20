import React from 'react'
import cx from 'classnames'
import makeStyles from '@material-ui/core/styles/makeStyles'
import TaskRow from './TaskRow'
import { ITaskToDisplay } from 'types'

const tasks: ITaskToDisplay[] = [
  {
    id: '1',
    userId: '1',
    projectId: '1',
    title: 'Title',
    deadlineDate: new Date('2019-11-01'),
    isImportant: false
  }
]

const useStyles = makeStyles({
  root: {
    width: '100%',
    borderCollapse: 'collapse'
  }
})

interface IOwnProps {
  className?: string
}

const TasksTable: React.FC<IOwnProps> = ({ className }) => {
  const classes = useStyles({})

  return (
    <table className={cx(classes.root, className)}>
      <tbody>
      {tasks.map(task => (
        <TaskRow key={task.id} task={task} />
      ))}
      </tbody>
    </table>
  )
}

export default TasksTable
