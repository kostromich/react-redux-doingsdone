import React from 'react'
import Layout from 'components/layout/Layout'
import HeaderSide from 'components/layout/header/HeaderSide'
import HeaderSideItem from 'components/layout/header/HeaderSideItem'
import UserMenu from 'components/userMenu/UserMenu'
import ContentWithSidebar from '../../components/layout/content/ContentWithSidebar'
import AddTaskButton from './components/tasks/AddTaskButton'
import Tasks, { TASKS_HEADER } from './components/tasks/Tasks'
import Projects, { PROJECTS_HEADER } from './components/projects/Projects'
import { getNowUnixTime } from 'helpers'
import { IUser } from 'types'

const user: IUser = {
  id: '1',
  name: 'Константин',
  password: '123456',
  email: 'user@email.com',
  createdAt: getNowUnixTime()
}

const MainPage: React.FC = () => {
  return (
    <Layout
      headerContent={<HeaderSide>
        <HeaderSideItem><AddTaskButton /></HeaderSideItem>
        <HeaderSideItem><UserMenu user={user} /></HeaderSideItem>
      </HeaderSide>}
      content={<ContentWithSidebar
        sidebarHeader={PROJECTS_HEADER}
        sidebarContent={<Projects />}
        mainHeader={TASKS_HEADER}
        mainContent={<Tasks />}
      />}
    />
  )
}

export default MainPage
