import React from 'react'
import cx from 'classnames'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Checkbox from 'components/checkbox/Checkbox'
import Column from './Column'
import { ITask } from 'types'

const useStyles = makeStyles({
  root: {
    position: 'relative',
    width: 476
  },
  checkboxInput: {},
  checkboxText: {
    fontWeight: 'bold'
  }
})

interface IOwnProps {
  className?: string
  task: ITask
}

const TitleColumn: React.FC<IOwnProps> = ({
  className,
  task
}) => {
  const classes = useStyles({})

  return (
    <Column className={cx(classes.root, className)}>
      <Checkbox
        checkboxText={task.title}
        checkboxTextClassName={classes.checkboxText}
      />
    </Column>
  )
}

export default TitleColumn
