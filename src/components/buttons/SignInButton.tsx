import React from 'react'
import ButtonTransparent from './ButtonTransparent'
import { IButtonProps } from './Button'

const BUTTON_TEXT = 'Войти'

const SignInButton: React.FC<IButtonProps> = ({
  className,
  href
}) => {
  return (
    <ButtonTransparent
      className={className}
      href={href}
    >
      {BUTTON_TEXT}
    </ButtonTransparent>
  )
}

export default SignInButton
