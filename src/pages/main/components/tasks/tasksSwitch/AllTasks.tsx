import React from 'react'
import TasksSwitchItem from './TasksSwitchItem'

const TEXT = 'Все задачи'

const AllTasks: React.FC = () => {
  return (
    <TasksSwitchItem
      text={TEXT}
      href={'#'}
      isActive={true}
    />
  )
}

export default AllTasks
