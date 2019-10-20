import React from 'react'
import SidebarButton from 'components/buttons/SidebarButton'
import EmptyProjects from './EmptyProjects'
import ProjectsList from './projectsList/ProjectsList'
import AddProjectButton from './AddProjectButton'
import { IProject } from 'types'

export const PROJECTS_HEADER = 'Проекты'

const projects: IProject[] = [
  { id: '1', name: 'Название проекта', tasksCount: 0, isActive: false },
  { id: '2', name: 'Активный проект', tasksCount: 0, isActive: true }
]

const Projects: React.FC = () => {
  return (
    <>
      {projects.length
        ? <ProjectsList projects={projects} />
        : <EmptyProjects />
      }
      <SidebarButton
        ButtonComponent={AddProjectButton}
        variant='transparent'
      />
    </>
  )
}

export default Projects
