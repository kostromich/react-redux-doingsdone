import React from 'react'
import SidebarHeader from 'components/layout/content/sidebar/Header'
import Projects, { PROJECTS_HEADER } from '../projects/Projects'

const MainPageSidebarContent: React.FC = () => {
  return (
    <>
      <SidebarHeader>
        {PROJECTS_HEADER}
      </SidebarHeader>
      <Projects />
    </>
  )
}

export default MainPageSidebarContent
