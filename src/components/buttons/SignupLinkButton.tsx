import React from 'react'
import { ROUTE_SIGNUP_PAGE } from 'routes'
import LinkButton, { ILinkButtonProps } from './LinkButton'

const BUTTON_TEXT = 'Зарегистрироваться'

const SignupLinkButton: React.FC<ILinkButtonProps> = ({ className }) => {
  return (
    <LinkButton
      className={className}
      to={ROUTE_SIGNUP_PAGE}
    >
      {BUTTON_TEXT}
    </LinkButton>
  )
}

export default SignupLinkButton
