import React from 'react'
import cx from 'classnames'
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    top: 11,
    right: 8,
    width: 30,
    height: 30,
    fontSize: 0,
    background: 'transparent url(img/search.png) no-repeat 50% 50%',
    border: 0,
    boxSizing: 'border-box'
  }
})

interface IOwnProps {
  className?: string
}

const SearchSubmit: React.FC<IOwnProps> = ({ className }) => {
  const classes = useStyles({})

  return (
    <input
      className={cx(classes.root, className)}
      type='submit'
      name=''
      value='Искать'
    />
  )
}

export default SearchSubmit
