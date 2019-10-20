import React from 'react'
import Button, { IButtonProps } from './Button'

const BUTTON_TEXT = 'Войти'

const SignInButton: React.FC<IButtonProps> = ({
  className,
  href,
  ...props
}) => {
  return (
    <Button
      className={className}
      href={href}
      {...props}
    >
      {BUTTON_TEXT}
    </Button>
  )
}

export default SignInButton
