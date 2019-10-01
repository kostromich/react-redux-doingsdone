import React from 'react'
import cx from 'classnames'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Button, { IButtonProps } from './Button'

const useStyles = makeStyles({
  root: {
    color: '#6e45e2',
    border: '1px solid #d7dbe8',
    cursor: 'pointer',
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: 'transparent',
      color: '#7e55f2'
    },
    '&:focus': {
      backgroundColor: 'transparent',
      color: '#7e55f2'
    },
    '&:active': {
      backgroundColor: 'transparent',
      color: '#502bbb'
    }
  }
})

const ButtonTransparent: React.FC<IButtonProps> = ({
  className,
  href,
  children
}) => {
  const classes = useStyles({})

  return (
    <Button
      className={cx(classes.root, className)}
      href={href}
    >
      {children}
    </Button>
  )
}

export default ButtonTransparent
