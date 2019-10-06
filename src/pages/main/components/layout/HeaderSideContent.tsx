import React from 'react'
import useHeaderSideItemStyles from 'hooks/useHeaderSideItemStyles'
import AddTaskButton from 'pages/main/components/tasks/AddTaskButton'
import UserMenu from 'components/userMenu/UserMenu'
import { getNowUnixTime } from 'helpers'
import { IUser } from 'types'

const user: IUser = {
  id: '1',
  name: 'Константин',
  password: '123456',
  email: 'user@email.com',
  createdAt: getNowUnixTime()
}

const HeaderSideContent: React.FC = () => {
  const headerSideItemClasses = useHeaderSideItemStyles({})

  return (
    <>
      <AddTaskButton className={headerSideItemClasses.root} />
      <UserMenu
        className={headerSideItemClasses.root}
        user={user}
      />
    </>
  )
}

export default HeaderSideContent
