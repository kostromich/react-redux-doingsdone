import React from 'react'
import Button from './ButtonTransparent'
import { IButtonProps } from './Button'

const BUTTON_TEXT = 'Войти'

const SignInButton: React.FC<IButtonProps> = ({
  className,
  href
}) => {
  return (
    <Button
      className={className}
      href={href}
    >
      {BUTTON_TEXT}
    </Button>
  )
}

export default SignInButton
