import React from 'react'
import cx from 'classnames'
import makeStyles from '@material-ui/core/styles/makeStyles'
import ProjectLink from './ProjectLink'
import ProjectTasksCount from './ProjectTasksCount'
import { getProjectIsActive } from 'modules/projects/getters'
import { IProject } from 'types'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    fontSize: 14,
    color: '#9fa4af',
    textTransform: 'uppercase',
    marginLeft: 2,
    '&:hover': {
      marginLeft: 0,
      borderLeft: '2px solid #7e55f2'
    },
    '&.active': {
      marginLeft: 0,
      color: '#31313a',
      backgroundColor: '#f0f1f5',
      borderLeft: '2px solid #6e45e2'
    },
    '&.active:hover': {
      borderColor: '#7e55f2'
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
    getProjectIsActive(project) ? 'active' : ''
  )

  return (
    <li className={resultingClassName}>
      <ProjectLink project={project} />
      <ProjectTasksCount project={project} />
    </li>
  )
}

export default ProjectsListItem
