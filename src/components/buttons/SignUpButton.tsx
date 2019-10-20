import React from 'react'
import Button, { IButtonProps } from './Button'
import { ROUTE_SIGNUP_PAGE } from 'routes'

const BUTTON_TEXT = 'Зарегистрироваться'

const SignUpButton: React.FC<IButtonProps> = ({ className }) => {
  return (
    <Button
      className={className}
      href={ROUTE_SIGNUP_PAGE}
    >
      {BUTTON_TEXT}
    </Button>
  )
}

export default SignUpButton
