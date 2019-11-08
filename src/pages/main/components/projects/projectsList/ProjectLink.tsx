import React from 'react'
import { useDispatch } from 'react-redux'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { getProjectId, getProjectTitle } from 'modules/projects/getters'
import { setActiveProjectId } from 'modules/filters'
import { IProject } from 'types'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    padding: '14px 8px',
    fontWeight: 'bold',
    color: 'inherit',
    textDecoration: 'none',
    letterSpacing: '0.05em',
    cursor: 'pointer',
    '&:hover, &:focus': {
      textDecoration: 'none'
    }
  }
})

interface IOwnProps {
  project: IProject
}
const ProjectLink: React.FC<IOwnProps> = ({ project }) => {
  const dispatch = useDispatch()

  const classes = useStyles({})

  const onClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    e.preventDefault()
    dispatch(setActiveProjectId(getProjectId(project)))
  }

  return (
    <div
      className={classes.root}
      onClick={onClick}
    >
      {getProjectTitle(project)}
    </div>
  )
}

export default ProjectLink
