import React from 'react'
import TasksSearchForm from './tasksSearchForm/TasksSearchForm'

export const TASKS_HEADER = 'Список задач'

const Tasks: React.FC = () => {
  return (
    <>
      <TasksSearchForm />
    </>
  )
}

export default Tasks
