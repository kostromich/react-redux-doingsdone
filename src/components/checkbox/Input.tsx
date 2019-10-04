import React from 'react'
import cx from 'classnames'
import useHiddenContentStyles from 'hooks/useHiddenContentStyles'
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles({
  root: {
    '&:focus + *': {
      outlineStyle: 'thin dotted',
      outline: '5px auto -webkit-focus-ring-color'
    }
  }
})

interface IOwnProps {
  isChecked?: boolean
}

const Input: React.FC<IOwnProps> = ({
  isChecked = false,
  ...inputProps
}) => {
  const classes = useStyles({})
  const hiddenContentClasses = useHiddenContentStyles({})

  return (
    <input
      {...inputProps}
      className={cx(classes.root, hiddenContentClasses.input)}
      type='checkbox'
      checked={isChecked}
    />
  )
}

export default Input
