import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import EmptyProjects from './EmptyProjects'
import ProjectsList from './projectsList/ProjectsList'
import AddProjectButton from './AddProjectButton'
import { IProject } from 'types'

export const PROJECTS_HEADER = 'Проекты'

const projects: IProject[] = [
  { id: '1', name: 'Название проекта', tasksCount: 0, isActive: false },
  { id: '2', name: 'Активный проект', tasksCount: 0, isActive: true }
]

const useStyles = makeStyles({
  root: {},
  addProjectButton: {
    width: 255
  }
})

const Projects: React.FC = () => {
  const classes = useStyles({})

  return (
    <>
      {projects.length
        ? <ProjectsList projects={projects} />
        : <EmptyProjects />
      }
      <AddProjectButton className={classes.addProjectButton} />
    </>
  )
}

export default Projects
