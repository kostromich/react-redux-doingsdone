import React from 'react'
import cx from 'classnames'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { IUser } from 'types'

const useStyles = makeStyles({
  root: {
    margin: '3px 0 2px'
  }
})

interface IOwnProps {
  className?: string
  user: IUser
}

const UserName: React.FC<IOwnProps> = ({ className, user }) => {
  const classes = useStyles({})

  return (
    <p className={cx(classes.root, className)}>
      {user.name}
    </p>
  )
}

export default UserName
