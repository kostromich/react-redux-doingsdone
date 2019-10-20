import React from 'react'
import Button, { IButtonProps } from './Button'
import { ROUTE_SIGNIN_PAGE } from 'routes'

const BUTTON_TEXT = 'Войти'

const SignInButton: React.FC<IButtonProps> = ({
  className,
  ...props
}) => {
  return (
    <Button
      className={className}
      href={ROUTE_SIGNIN_PAGE}
      {...props}
    >
      {BUTTON_TEXT}
    </Button>
  )
}

export default SignInButton
