import React from 'react'
import cx from 'classnames'
import makeStyles from '@material-ui/core/styles/makeStyles'

export type TButtonVariants = 'filled' | 'transparent'
const DEFAULT_BUTTON_VARIANT = 'filled'

export type TButtonContentBefore = '' | 'plus'
const DEFAULT_BUTTON_CONTENT_BEFORE = ''

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
  },
  plus: {
    '&::before': {
      content: '"+"',
      marginRight: 5,
      fontSize: 14
    }
  }
})

export interface IAbstractButtonProps {
  to?: string
  onClick?: (e) => void
  className?: string
  variant?: TButtonVariants
  contentBefore?: TButtonContentBefore
}

interface IOwnProps extends IAbstractButtonProps {
  BaseComponent: React.ComponentType<any>
}

const AbstractButton: React.FC<IOwnProps> = ({
  className,
  children,
  BaseComponent,
  variant = DEFAULT_BUTTON_VARIANT,
  contentBefore = DEFAULT_BUTTON_CONTENT_BEFORE,
  ...props
}) => {
  const classes = useStyles({})

  const resultingClassName = cx(
    classes.root,
    classes[variant],
    classes[contentBefore],
    className
  )

  return (
    <BaseComponent
      className={resultingClassName}
      {...props}
    >
      {children}
    </BaseComponent>
  )
}

export default AbstractButton
