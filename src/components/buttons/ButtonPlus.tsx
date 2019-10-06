import React from 'react'
import cx from 'classnames'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Button, { IButtonProps } from './Button'

const useStyles = makeStyles({
  root: {
    '&::before': {
      content: '"+"',
      marginRight: 5,
      fontSize: 14
    }
  }
})

const ButtonPlus: React.FC<IButtonProps> = ({
  className,
  href,
  children,
  ...buttonProps
}) => {
  const classes = useStyles({})

  return (
    <Button
      className={cx(classes.root, className)}
      href={href}
      {...buttonProps}
    >
      {children}
    </Button>
  )
}

export default ButtonPlus
