import React from 'react'
import cx from 'classnames'
import makeStyles from '@material-ui/core/styles/makeStyles'
import LogoutLink from '../auth/LogoutLink'
import UserName from './UserName'
import { IUser } from 'types'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center'
  }
})

interface IOwnProps {
  className?: string
  user: IUser
}

const UserMenu: React.FC<IOwnProps> = ({ className, user }) => {
  const classes = useStyles({})

  return (
    <div className={cx(classes.root, className)}>
      <div>
        <UserName user={user} />
        <LogoutLink />
      </div>
    </div>
  )
}

export default UserMenu
