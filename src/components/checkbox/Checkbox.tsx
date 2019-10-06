import React from 'react'
import cx from 'classnames'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Input from './Input'
import Text from './Text'

const useStyles = makeStyles({
  root: {
    position: 'relative',
    display: 'inline-block',
    verticalAlign: 'top',
    border: '1px solid transparent'
  }
})

interface IOwnProps {
  className?: string
  checkboxInputClassName?: string
  checkboxTextClassName?: string
  checkboxText?: string
  isChecked?: boolean
}

const Checkbox: React.FC<IOwnProps> = ({
  className,
  checkboxTextClassName,
  checkboxText,
  isChecked = false
}) => {
  const classes = useStyles({})

  return (
    <label className={cx(classes.root, className)}>
      <Input isChecked={isChecked} />
      <Text text={checkboxText} className={checkboxTextClassName} />
    </label>
  )
}

export default Checkbox
