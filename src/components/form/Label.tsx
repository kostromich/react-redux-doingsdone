import React from 'react'
import cx from 'classnames'
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles({
  root: {
    display: 'inline-block',
    marginBottom: 7,
    fontSize: 13
  }
})

interface IOwnProps extends React.HTMLProps<HTMLLabelElement> {
  className?: string
  isRequired?: boolean
}

const Label: React.FC<IOwnProps> = ({
  className,
  children,
  isRequired = false,
  ...labelProps
}) => {
  const classes = useStyles({})

  return (
    <label
      className={cx(classes.root, className)}
      {...labelProps}
    >
      {children}
      &nbsp;
      {isRequired &&
        <sup>*</sup>
      }
    </label>
  )
}

export default Label
