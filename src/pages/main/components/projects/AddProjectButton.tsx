import React from 'react'
import ButtonPlus from 'components/buttons/ButtonPlus'

const BUTTON_TEXT = 'Добавить проект'

interface IOwnProps {
  className?: string
}
const AddProjectButton: React.FC<IOwnProps> = ({ className }) => {
  return (
    <ButtonPlus className={className}>
      {BUTTON_TEXT}
    </ButtonPlus>
  )
}

export default AddProjectButton
