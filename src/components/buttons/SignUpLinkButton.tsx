import React from 'react'
import { ROUTE_SIGN_UP_PAGE } from 'routes'
import LinkButton, { ILinkButtonProps } from './LinkButton'

const BUTTON_TEXT = 'Зарегистрироваться'

const SignUpLinkButton: React.FC<ILinkButtonProps> = ({ className, ...props }) => {
  return (
    <LinkButton
      {...props}
      className={className}
      to={ROUTE_SIGN_UP_PAGE}
    >
      {BUTTON_TEXT}
    </LinkButton>
  )
}

export default SignUpLinkButton
