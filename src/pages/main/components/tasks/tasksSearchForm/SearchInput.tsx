import React from 'react'
import cx from 'classnames'
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles({
  root: {
    boxSizing: 'border-box',
    width: '100%',
    padding: 15,
    border: '1px solid #d7dbe8',
    borderRadius: 3
  }
})

interface IOwnProps {
  className?: string
}

const SearchInput: React.FC<IOwnProps> = ({ className }) => {
  const classes = useStyles({})

  return (
    <input
      className={cx(classes.root, className)}
      type='text'
      name=''
      defaultValue=''
      placeholder='Поиск по задачам'
    />
  )
}

export default SearchInput
