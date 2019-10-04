import React from 'react'
import cx from 'classnames'
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles({
  root: {
    position: 'relative',
    display: 'block',
    padding: '1px 0 1px 28px',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: 18,
      height: 18,
      border: '1px solid #d7dbe8',
      borderRadius: 3
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      top: 5,
      left: 5,
      display: 'none',
      width: 10,
      height: 5,
      borderBottom: '1px solid #7f5be5',
      borderLeft: '1px solid #7f5be5',
      transform: 'rotate(-50deg)'
    },
    '&:focus': {
      outlineStyle: 'thin dotted',
      outline: '5px auto -webkit-focus-ring-color'
    },
    '&:hover::before, &:focus::before': {
      border: '1px solid #6e45e2'
    }
  },
  checked: {
    '&::before': {
      border: '1px solid #d7dbe8'
    },
    '&::after': {
      display: 'block'
    },
    '&:hover::before, &:focus::before': {
      border: '1px solid #6e45e2'
    }
  }
})

interface IOwnProps {
  className?: string
  text?: string
  isChecked?: boolean
}

const Text: React.FC<IOwnProps> = ({
  className,
  text,
  isChecked = false
}) => {
  const classes = useStyles({})

  const resultingClassName = cx(
    classes.root,
    isChecked ? classes.checked : '',
    className
  )

  return (
    <span className={resultingClassName}>
      {text}
    </span>
  )
}

export default Text
