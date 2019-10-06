import React from 'react'
import TasksSwitchItem from './TasksSwitchItem'

const TEXT = 'Просроченные'

const OverdueTasks: React.FC = () => {
  return (
    <TasksSwitchItem
      text={TEXT}
      href={'#'}
    />
  )
}

export default OverdueTasks
