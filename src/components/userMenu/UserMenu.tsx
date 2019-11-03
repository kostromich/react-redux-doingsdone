import React from 'react'
import cx from 'classnames'
import makeStyles from '@material-ui/core/styles/makeStyles'
import SignOutLink from 'components/auth/SignOutLink'
import UserName from './UserName'
import { TUser } from 'types'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center'
  }
})

interface IOwnProps {
  className?: string
  user: TUser
}

const UserMenu: React.FC<IOwnProps> = ({ className, user }) => {
  const classes = useStyles({})

  return (
    <div className={cx(classes.root, className)}>
      <div>
        <UserName user={user} />
        <SignOutLink />
      </div>
    </div>
  )
}

export default UserMenu
