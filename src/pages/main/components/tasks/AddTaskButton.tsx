import LinkButton from 'components/buttons/LinkButton'
import React from 'react'

const BUTTON_TEXT = 'Добавить задачу'

interface IOwnProps {
  className?: string
}
const AddTaskButton: React.FC<IOwnProps> = ({ className }) => {
  return (
    <LinkButton className={className} contentBefore='plus'>
      {BUTTON_TEXT}
    </LinkButton>
  )
}

export default AddTaskButton
