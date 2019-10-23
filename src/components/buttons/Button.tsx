import React from 'react'
import AbstractButton, { IAbstractButtonProps } from './AbstractButton'
import HTMLButtonWrapper, { IHTMLButtonProps } from './HTMLButtonWrapper'

export interface IButtonProps extends IAbstractButtonProps, IHTMLButtonProps {
  className?: string
  onClick?: (e) => void
}

const Button: React.FC<IButtonProps> = ({
  className,
  children,
  onClick
}) => {
  return (
    <AbstractButton
      BaseComponent={HTMLButtonWrapper}
      className={className}
      onClick={onClick}
    >
      {children}
    </AbstractButton>
  )
}

export default Button
