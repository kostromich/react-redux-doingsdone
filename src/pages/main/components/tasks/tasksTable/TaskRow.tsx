import React from 'react'
import cx from 'classnames'
import makeStyles from '@material-ui/core/styles/makeStyles'
import TitleColumn from './TitleColumn'
import FileColumn from './FileColumn'
import DeadlineColumn from './DeadlineColumn'
import { ITask } from 'types'

const useStyles = makeStyles({
  root: {
    '&:first-child $td': {
      borderTop: '1px solid #d7dbe8'
    }
  }
})

interface IOwnProps {
  className?: string
  task: ITask
}

const TaskRow: React.FC<IOwnProps> = ({ className, task }) => {
  const classes = useStyles({})

  return (
    <tr className={cx(classes.root, className)}>
      <TitleColumn task={task} />
      <FileColumn task={task} />
      <DeadlineColumn task={task} />
    </tr>
  )
}

export default TaskRow
