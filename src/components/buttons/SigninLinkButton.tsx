import React from 'react'
import LinkButton, { ILinkButtonProps } from './LinkButton'
import { ROUTE_SIGNIN_PAGE } from 'routes'

const BUTTON_TEXT = 'Войти'

const SigninLinkButton: React.FC<ILinkButtonProps> = ({
  className,
  ...props
}) => {
  return (
    <LinkButton
      className={className}
      to={ROUTE_SIGNIN_PAGE}
      {...props}
    >
      {BUTTON_TEXT}
    </LinkButton>
  )
}

export default SigninLinkButton
