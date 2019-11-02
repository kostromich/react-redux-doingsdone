import React, { ButtonHTMLAttributes } from 'react'

interface IHTMLButtonAttributes extends ButtonHTMLAttributes<HTMLButtonElement> {}

export interface IHTMLButtonProps extends React.DetailedHTMLProps<IHTMLButtonAttributes, HTMLButtonElement> {}

const HTMLButtonWrapper: React.FC<IHTMLButtonProps> = ({ children, ...props }) => {
  return (
    <button {...props}>
      {children}
    </button>
  )
}

export default HTMLButtonWrapper
