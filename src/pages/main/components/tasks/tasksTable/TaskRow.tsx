import React from 'react'
import useTasksTableStyles from 'hooks/useTasksTableStyles'
import TitleColumn from './TitleColumn'
import FileColumn from './FileColumn'
import DeadlineColumn from './DeadlineColumn'
import { ITask } from 'types'

interface IOwnProps {
  task: ITask
}

const TaskRow: React.FC<IOwnProps> = ({ task }) => {
  const tableClasses = useTasksTableStyles({})

  return (
    <tr className={tableClasses.tr}>
      <TitleColumn task={task} />
      <FileColumn task={task} />
      <DeadlineColumn task={task} />
    </tr>
  )
}

export default TaskRow
