import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { Link } from 'react-router-dom'
import { IProject } from 'types'

const BASE_PROJECT_ROUTE = '/project'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    padding: '14px 8px',
    fontWeight: 'bold',
    color: 'inherit',
    textDecoration: 'none',
    letterSpacing: '0.05em',
    '&:hover, &:focus': {
      textDecoration: 'none'
    }
  }
})

interface IOwnProps {
  project: IProject
}
const ProjectLink: React.FC<IOwnProps> = ({ project }) => {
  const classes = useStyles({})

  const projectRoute = `${BASE_PROJECT_ROUTE}/${project.id}`

  return (
    <Link
      to={projectRoute}
      className={classes.root}
    >
      {project.name}
    </Link>
  )
}

export default ProjectLink
