import React from 'react'
import { useSelector } from 'react-redux'
import SidebarButton from 'components/buttons/SidebarButton'
import EmptyProjects from './EmptyProjects'
import ProjectsList from './projectsList/ProjectsList'
import AddProjectButton from './AddProjectButton'
import { getProjects } from 'selectors'

export const PROJECTS_HEADER = 'Проекты'

const Projects: React.FC = () => {
  const projects = useSelector(getProjects)

  if (projects.length === 0) {
    return (
      <>
        <EmptyProjects />
        <SidebarButton
          ButtonComponent={AddProjectButton}
          variant='transparent'
        />
      </>
    )
  }

  return (
    <ProjectsList projects={projects} />
  )
}

export default Projects
