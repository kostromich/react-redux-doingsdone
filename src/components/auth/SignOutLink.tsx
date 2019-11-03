import React from 'react'
import { useDispatch } from 'react-redux'
import cx from 'classnames'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { signOutUser } from 'modules/global'

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

const SignOutLink: React.FC<IOwnProps> = ({ className }) => {
  const dispatch = useDispatch()

  const classes = useStyles({})

  const onClick = e => {
    e.preventDefault()
    dispatch(signOutUser())
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

export default SignOutLink
