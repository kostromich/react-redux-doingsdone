import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { setActiveProjectId } from 'modules/filters'
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
  const dispatch = useDispatch()

  const { projectId } = useParams()

  useEffect(() => {
    if (projectId) {
      dispatch(setActiveProjectId(projectId))
    }
  }, [ dispatch, projectId ])

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
