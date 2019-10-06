import React from 'react'
import useTasksTableStyles from 'hooks/useTasksTableStyles'
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

const TasksTable: React.FC = () => {
  const tableClasses = useTasksTableStyles({})

  return (
    <table className={tableClasses.table}>
      <tbody>
      {tasks.map(task => (<TaskRow key={task.id} task={task} />))}
      </tbody>
    </table>
  )
}

export default TasksTable
