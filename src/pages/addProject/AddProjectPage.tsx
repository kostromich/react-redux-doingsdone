import React from 'react'
import { useSelector } from 'react-redux'
import Layout from 'components/layout/Layout'
import HeaderSide from 'components/layout/header/HeaderSide'
import HeaderSideItem from 'components/layout/header/HeaderSideItem'
import UserMenu from 'components/userMenu/UserMenu'
import ContentWithSidebar from 'components/layout/content/ContentWithSidebar'
import AddProjectForm from './components/addProjectForm/AddProjectForm'
import AddTaskButton from 'pages/main/components/tasks/AddTaskButton'
import Projects, { PROJECTS_HEADER } from 'pages/main/components/projects/Projects'
import { getUser } from 'selectors'

const AddProjectPage: React.FC = () => {
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
        mainHeader='Добавление проекта'
        mainContent={<AddProjectForm />}
      />}
    />
  )
}

export default AddProjectPage
