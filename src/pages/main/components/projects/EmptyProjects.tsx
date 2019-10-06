import makeStyles from '@material-ui/core/styles/makeStyles'
import React from 'react'
import ArrowDown from '@material-ui/icons/ArrowDownward'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  icon: {
    marginTop: 15,
    marginBottom: 10,
    animation: '$mover 1s infinite alternate'
  },
  '@keyframes mover': {
    from: {
      transform: 'translateY(0)'
    },
    to: {
      transform: 'translateY(-10px)'
    }
  }
})

const EmptyProjects: React.FC = () => {
  const classes = useStyles({})

  return (
    <div className={classes.root}>
      Проектов пока нет
      <ArrowDown className={classes.icon} />
    </div>
  )
}

export default EmptyProjects
