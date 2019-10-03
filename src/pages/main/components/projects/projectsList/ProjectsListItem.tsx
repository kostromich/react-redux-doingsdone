import React from 'react'
import cx from 'classnames'
import makeStyles from '@material-ui/core/styles/makeStyles'
import ProjectLink from './ProjectLink'
import ProjectTasksCount from './ProjectTasksCount'
import { IProject } from 'types'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    fontSize: 14,
    color: '#9fa4af',
    textTransform: 'uppercase',
    '&.active': {
      color: '#31313a',
      backgroundColor: '#f0f1f5',
      borderLeft: '2px solid #6e45e2'
    }
  }
})

interface IOwnProps {
  project: IProject
}

const ProjectsListItem: React.FC<IOwnProps> = ({ project }) => {
  const classes = useStyles({})

  const resultingClassName = cx(
    classes.root,
    project.isActive ? 'active' : ''
  )

  return (
    <li className={resultingClassName}>
      <ProjectLink project={project} />
      <ProjectTasksCount project={project} />
    </li>
  )
}

export default ProjectsListItem
