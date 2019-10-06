import React from 'react'
import ButtonPlus from 'components/buttons/ButtonPlus'

const BUTTON_TEXT = 'Добавить задачу'

interface IOwnProps {
  className?: string
}
const AddTaskButton: React.FC<IOwnProps> = ({ className }) => {
  return (
    <ButtonPlus className={className}>
      {BUTTON_TEXT}
    </ButtonPlus>
  )
}

export default AddTaskButton
