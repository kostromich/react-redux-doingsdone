import React from 'react'
import { Link } from 'react-router-dom'
import AbstractButton, { IAbstractButtonProps } from './AbstractButton'
import { DEFAULT_PATH } from 'helpers'

export interface ILinkButtonProps extends IAbstractButtonProps {
  to?: string
}

const LinkButton: React.FC<ILinkButtonProps> = ({
  className,
  children,
  to = DEFAULT_PATH,
  ...props
}) => {
  return (
    <AbstractButton
      {...props}
      BaseComponent={Link}
      className={className}
      to={to}
    >
      {children}
    </AbstractButton>
  )
}

export default LinkButton
