import React from 'react'
import cx from 'classnames'
import makeStyles from '@material-ui/core/styles/makeStyles'
import SearchInput from './SearchInput'
import SearchSubmit from './SearchSubmit'

const useStyles = makeStyles({
  root: {
    position: 'relative',
    marginBottom: 23
  }
})

interface IOwnProps {
  className?: string
}

const TasksSearchForm: React.FC<IOwnProps> = ({ className }) => {
  const classes = useStyles({})

  return (
    <form className={cx(classes.root, className)} autoComplete='off'>
      <SearchInput />
      <SearchSubmit />
    </form>
  )
}

export default TasksSearchForm
