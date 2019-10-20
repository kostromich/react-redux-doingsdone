import React from 'react'
import ButtonPlus from 'components/buttons/ButtonPlus'
import { IButtonProps } from 'components/buttons/Button'

const BUTTON_TEXT = 'Добавить проект'

const AddProjectButton: React.FC<IButtonProps> = (buttonProps) => {
  return (
    <ButtonPlus
      {...buttonProps}
    >
      {BUTTON_TEXT}
    </ButtonPlus>
  )
}

export default AddProjectButton
