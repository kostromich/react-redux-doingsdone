import React from 'react'
import TasksSwitchItem from './TasksSwitchItem'

const TEXT = 'Повестка дня'

const TodayTasks: React.FC = () => {
  return (
    <TasksSwitchItem
      text={TEXT}
      href={'#'}
    />
  )
}

export default TodayTasks
