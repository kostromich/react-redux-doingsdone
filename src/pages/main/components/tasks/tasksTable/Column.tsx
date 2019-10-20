import React from 'react'
import cx from 'classnames'
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles({
  root: {
    padding: '20px 0',
    borderBottom: '1px solid #d7dbe8'
  }
})

interface IOwnProps {
  className?: string
}

const Column: React.FC<IOwnProps> = ({ className, children }) => {
  const classes = useStyles({})

  return (
    <td className={cx(classes.root, className)}>
      {children}
    </td>
  )
}

export default Column
