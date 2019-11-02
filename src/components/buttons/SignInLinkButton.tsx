import React from 'react'
import LinkButton, { ILinkButtonProps } from './LinkButton'
import { ROUTE_SIGN_IN_PAGE } from 'routes'

const BUTTON_TEXT = 'Войти'

const SignInLinkButton: React.FC<ILinkButtonProps> = ({
  className,
  ...props
}) => {
  return (
    <LinkButton
      className={className}
      to={ROUTE_SIGN_IN_PAGE}
      {...props}
    >
      {BUTTON_TEXT}
    </LinkButton>
  )
}

export default SignInLinkButton
