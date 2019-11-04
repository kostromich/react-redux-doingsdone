import React from 'react'
import { useSelector } from 'react-redux'
import Layout from 'components/layout/Layout'
import HeaderSide from 'components/layout/header/HeaderSide'
import HeaderSideItem from 'components/layout/header/HeaderSideItem'
import UserMenu from 'components/userMenu/UserMenu'
import ContentWithSidebar from 'components/layout/content/ContentWithSidebar'
import AddTaskButton from './components/tasks/AddTaskButton'
import Tasks, { TASKS_HEADER } from './components/tasks/Tasks'
import Projects, { PROJECTS_HEADER } from './components/projects/Projects'
import { getUser } from 'selectors'

const MainPage: React.FC = () => {
  const user = useSelector(getUser)

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
