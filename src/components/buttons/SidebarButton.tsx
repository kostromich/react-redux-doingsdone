import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { IButtonProps } from './Button'

const useStyles = makeStyles({
  root: {
    width: 225
  }
})

interface IOwnProps extends IButtonProps {
  ButtonComponent: React.ComponentType<IButtonProps>
}

const SidebarButton: React.FC<IOwnProps> = ({ ButtonComponent, ...buttonProps }) => {
  const classes = useStyles()
  return (
    <ButtonComponent className={classes.root} {...buttonProps} />
  )
}

export default SidebarButton
