import React from 'react'
import cx from 'classnames'
import useTasksTableStyles from 'hooks/useTasksTableStyles'

interface IOwnProps {
  className?: string
}

const Column: React.FC<IOwnProps> = ({ className, children }) => {
  const tableClasses = useTasksTableStyles({})

  return (
    <td className={cx(tableClasses.td, className)}>
      {children}
    </td>
  )
}

export default Column
