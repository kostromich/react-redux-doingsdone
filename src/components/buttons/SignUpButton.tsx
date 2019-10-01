import React from 'react'
import Button, { IButtonProps } from './Button'

const BUTTON_TEXT = 'Зарегистрироваться'

const SignUpButton: React.FC<IButtonProps> = ({
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

export default SignUpButton
