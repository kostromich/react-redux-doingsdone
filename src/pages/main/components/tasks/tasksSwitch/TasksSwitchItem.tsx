import makeStyles from '@material-ui/core/styles/makeStyles'
import React from 'react'
import cx from 'classnames'
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
  root: {
    position: 'relative',
    display: 'flex',
    margin: '-1px 0 0 -1px',
    padding: '9px 19px',
    lineHeight: 1.4,
    color: '#9fa4af',
    whiteSpace: 'nowrap',
    backgroundColor: '#ffffff',
    border: '1px solid #d7dbe8',
    '&:hover, &:focus': {
      color: '#31313a',
      textDecoration: 'none'
    }
  },
  active: {
    color: '#31313a',
    backgroundColor: '#d7dbe8',
    borderColor: '#d7dbe8'
  }
})

interface IOwnProps {
  className?: string
  text: string
  href: string
  isActive?: boolean
}

const TasksSwitchItem: React.FC<IOwnProps> = ({
  className,
  text,
  href,
  isActive = false
}) => {
  const classes = useStyles({})

  const resultingClassName = cx(
    classes.root,
    isActive ? classes.active : '',
    className
  )

  return (
    <Link
      href={href}
      className={resultingClassName}
    >
      {text}
    </Link>
  )
}

export default TasksSwitchItem
