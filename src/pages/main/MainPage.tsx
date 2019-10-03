import React from 'react'
import Layout from 'components/layout/Layout'
import SidebarHeader from 'components/layout/content/sidebar/Header'
import MainHeader from 'components/layout/content/main/Header'
import Projects, { PROJECTS_HEADER } from './components/projects/Projects'
import Tasks, { TASKS_HEADER } from './components/tasks/Tasks'

const MainPage: React.FC = () => {
  const sidebarContent = (
    <>
      <SidebarHeader>
        {PROJECTS_HEADER}
      </SidebarHeader>
      <Projects />
    </>
  )

  const mainContent = (
    <>
      <MainHeader>
        {TASKS_HEADER}
      </MainHeader>
      <Tasks />
    </>
  )
  return (
    <Layout
      sidebarContent={sidebarContent}
      mainContent={mainContent}
    />
  )
}

export default MainPage
