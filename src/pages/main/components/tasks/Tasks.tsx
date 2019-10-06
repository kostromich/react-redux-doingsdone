import React from 'react'
import TasksSearchForm from './tasksSearchForm/TasksSearchForm'
import TasksControls from './TasksControls'
import TasksTable from './tasksTable/TasksTable'

export const TASKS_HEADER = 'Список задач'

const Tasks: React.FC = () => {
  return (
    <>
      <TasksSearchForm />
      <TasksControls />
      <TasksTable />
    </>
  )
}

export default Tasks
