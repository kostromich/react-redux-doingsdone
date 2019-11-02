import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { IAbstractButtonProps } from './AbstractButton'

const useStyles = makeStyles({
  root: {
    width: 225
  }
})

interface IOwnProps extends IAbstractButtonProps {
  ButtonComponent: React.ComponentType<IAbstractButtonProps>
}

const SidebarButton: React.FC<IOwnProps> = ({ ButtonComponent, ...props }) => {
  const classes = useStyles()
  return (
    <ButtonComponent className={classes.root} {...props} />
  )
}

export default SidebarButton
