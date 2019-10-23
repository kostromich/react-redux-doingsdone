import React from 'react'
import LinkButton, { ILinkButtonProps } from 'components/buttons/LinkButton'

const BUTTON_TEXT = 'Добавить проект'

const AddProjectButton: React.FC<ILinkButtonProps> = (buttonProps) => {
  return (
    <LinkButton
      {...buttonProps}
    >
      {BUTTON_TEXT}
    </LinkButton>
  )
}

export default AddProjectButton
