import React from 'react'
import TasksSearchForm from './tasksSearchForm/TasksSearchForm'
import TasksControls from './TasksControls'

export const TASKS_HEADER = 'Список задач'

const Tasks: React.FC = () => {
  return (
    <>
      <TasksSearchForm />
      <TasksControls />
    </>
  )
}

export default Tasks
