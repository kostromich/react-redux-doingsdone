import React from 'react'
import LinkButton, { ILinkButtonProps } from 'components/buttons/LinkButton'
import { ROUTE_ADD_PROJECT } from 'routes'

const BUTTON_TEXT = 'Добавить проект'

const AddProjectButton: React.FC<ILinkButtonProps> = (buttonProps) => {
  return (
    <LinkButton
      contentBefore='plus'
      to={ROUTE_ADD_PROJECT}
      {...buttonProps}
    >
      {BUTTON_TEXT}
    </LinkButton>
  )
}

export default AddProjectButton
