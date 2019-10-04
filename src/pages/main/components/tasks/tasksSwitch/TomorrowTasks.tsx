import React from 'react'
import TasksSwitchItem from './TasksSwitchItem'

const TEXT = 'Завтра'

const TomorrowTasks: React.FC = () => {
  return (
    <TasksSwitchItem
      text={TEXT}
      href={'#'}
    />
  )
}

export default TomorrowTasks
