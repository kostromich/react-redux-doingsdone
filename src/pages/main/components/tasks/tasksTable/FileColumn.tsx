import React from 'react'
import cx from 'classnames'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Column from './Column'
import DownloadLink from './DownloadLink'
import { ITask } from 'types'

const useStyles = makeStyles({
  root: {
    width: 190
  }
})

interface IOwnProps {
  className?: string
  task: ITask
}

const FileColumn: React.FC<IOwnProps> = ({
  className,
  task
}) => {
  const classes = useStyles({})

  return (
    <Column className={cx(classes.root, className)}>
      <DownloadLink task={task} />
    </Column>
  )
}

export default FileColumn
