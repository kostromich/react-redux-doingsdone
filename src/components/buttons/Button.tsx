import React from 'react'
import cx from 'classnames'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { Link } from 'react-router-dom'
import { DEFAULT_HREF } from 'helpers'

const useStyles = makeStyles({
  root: {
    display: 'inline-block',
    width: 180,
    padding: '17px 0',
    fontWeight: 700,
    fontSize: 12,
    textAlign: 'center',
    color: '#ffffff',
    textTransform: 'uppercase',
    textDecoration: 'none',
    backgroundColor: '#6e45e2',
    border: 0,
    borderRadius: 3,
    '&:focus': {
      backgroundColor: '#7e55f2'
    },
    '&:hover': {
      backgroundColor: '#7e55f2'
    },
    '&:active': {
      backgroundColor: '#502bbb'
    }
  }
})

export interface IButtonProps {
  className?: string
  href?: string
}
const Button: React.FC<IButtonProps> = ({
  className,
  children,
  href = DEFAULT_HREF
}) => {
  const classes = useStyles({})

  return (
    <Link
      className={cx(classes.root, className)}
      href={href}
    >
      {children}
    </Link>
  )
}

export default Button
