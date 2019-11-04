import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { getProjectTasksCount } from 'modules/projects/getters'
import { IProject } from 'types'

const useStyles = makeStyles({
  root: {
    display: 'inline-block',
    minWidth: 19,
    minHeight: 19,
    marginRight: 33,
    padding: 2,
    fontSize: 13,
    lineHeight: '18px',
    textAlign: 'center',
    backgroundColor: '#e8e9ee'
  }
})

interface IOwnProps {
  project: IProject
}

const ProjectTasksCount: React.FC<IOwnProps> = ({ project }) => {
  const classes = useStyles({})

  return (
    <span className={classes.root}>
      {getProjectTasksCount(project)}
    </span>
  )
}

export default ProjectTasksCount
