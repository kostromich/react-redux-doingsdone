import React from 'react'
import Button, { IButtonProps } from './Button'

const BUTTON_TEXT = 'Войти'

const SignInButton: React.FC<IButtonProps> = ({
  className,
  href
}) => {
  return (
    <Button
      className={className}
      href={href}
      variant='filled'
    >
      {BUTTON_TEXT}
    </Button>
  )
}

export default SignInButton
