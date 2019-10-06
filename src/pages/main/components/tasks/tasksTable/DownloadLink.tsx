import React from 'react'
import cx from 'classnames'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { DEFAULT_HREF } from 'helpers'
import { ITask } from 'types'

const useStyles = makeStyles({
  root: {
    position: 'relative',
    paddingLeft: 18,
    fontSize: 13,
    color: '#9172e9',
    textDecoration: 'none',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 1,
      left: 0,
      width: 14,
      height: 16,
      background: 'url(img/download-link.png) no-repeat'
    },
    '&:active': {
      color: '#502bbb'
    }
  }
})

interface IOwnProps {
  className?: string
  task: ITask
}

const DownloadLink: React.FC<IOwnProps> = ({ className, task }) => {
  const classes = useStyles({})

  return (
    <a
      className={cx(classes.root, className)}
      href={DEFAULT_HREF}
    >
      File
    </a>
  )
}

export default DownloadLink
