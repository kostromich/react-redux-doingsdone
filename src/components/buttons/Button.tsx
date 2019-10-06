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
    textTransform: 'uppercase',
    textDecoration: 'none',
    borderRadius: 3,
    cursor: 'pointer',
    '&:hover, &:focus': {
      textDecoration: 'none'
    }
  },
  filled: {
    color: '#ffffff',
    border: 0,
    backgroundColor: '#6e45e2',
    '&:focus': {
      backgroundColor: '#7e55f2'
    },
    '&:hover': {
      backgroundColor: '#7e55f2'
    },
    '&:active': {
      backgroundColor: '#502bbb'
    }
  },
  transparent: {
    color: '#6e45e2',
    border: '1px solid #d7dbe8',
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

export enum ButtonVariants {
  filled = 'filled',
  transparent = 'transparent'
}

export type TButtonVariant = 'filled' | 'transparent'

export interface IButtonProps {
  className?: string
  href?: string
  variant?: TButtonVariant
}

const Button: React.FC<IButtonProps> = ({
  className,
  children,
  href = DEFAULT_HREF,
  variant = ButtonVariants.filled
}) => {
  const classes = useStyles({})

  const buttonVariant = ButtonVariants[variant]

  const resultingClassName = cx(
    classes.root,
    classes[buttonVariant],
    className
  )

  return (
    <Link
      className={resultingClassName}
      to={href}
    >
      {children}
    </Link>
  )
}

export default Button
