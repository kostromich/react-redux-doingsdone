import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import ProjectsListItem from './ProjectsListItem'
import { getProjectId } from 'modules/projects/getters'
import { IProject } from 'types'

const useStyles = makeStyles({
  root: {
    marginBottom: 18
  },
  list: {
    margin: '0 0 0 -8px',
    padding: 0,
    listStyle: 'none'
  }
})

interface IOwnProps {
  projects: IProject[]
}

const ProjectsList: React.FC<IOwnProps> = ({ projects }) => {
  const classes = useStyles({})

  return (
    <nav className={classes.root}>
      <ul className={classes.list}>
        {projects.map(project => (
          <ProjectsListItem key={getProjectId(project)} project={project} />
        ))}
      </ul>
    </nav>
  )
}

export default ProjectsList
