import React from 'react'
import cx from 'classnames'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Column from './Column'
import { formatDateToDisplay } from 'helpers'
import { ITask } from 'types'

const useStyles = makeStyles({
  root: {
    width: 80
  }
})

interface IOwnProps {
  className?: string
  task: ITask
}

const DeadlineColumn: React.FC<IOwnProps> = ({
  className,
  task
}) => {
  const classes = useStyles({})

  return (
    <Column className={cx(classes.root, className)}>
      {formatDateToDisplay(task.deadlineDate)}
    </Column>
  )
}

export default DeadlineColumn
