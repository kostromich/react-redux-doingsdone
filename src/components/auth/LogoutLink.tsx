import React from 'react'
import cx from 'classnames'
import makeStyles from '@material-ui/core/styles/makeStyles'

const LINK_TEXT = 'Выйти'

const useStyles = makeStyles({
  root: {
    fontSize: 13,
    color: '#9fa4af',
    '&:active': {
      color: '#848a98'
    }
  }
})

interface IOwnProps {
  className?: string
}

const LogoutLink: React.FC<IOwnProps> = ({ className }) => {
  const classes = useStyles({})

  const onClick = e => {
    e.preventDefault()
    alert('Logout!')
  }

  return (
    <a
      className={cx(classes.root, className)}
      href='/'
      onClick={onClick}
    >
      {LINK_TEXT}
    </a>
  )
}

export default LogoutLink
