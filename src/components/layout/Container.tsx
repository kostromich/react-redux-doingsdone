import React from 'react'
import cx from 'classnames'
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles({
  root: {
    width: 1140,
    margin: '0 auto',
    padding: '0 20px'
  },
  withSidebar: {
    position: 'relative',
    '&::after': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: `calc(-50vw + 280px)`,
      zIndex: -1,
      width: '50vw',
      height: '100%',
      backgroundColor: '#f9fafc'
    }
  }
})

interface IOwnProps {
  className?: string
  withSidebar?: boolean
}

const Container: React.FC<IOwnProps> = ({
  className,
  children,
  withSidebar = false
}) => {
  const classes = useStyles({})

  const resultingClassName = cx(
    classes.root,
    withSidebar ? classes.withSidebar : '',
    className
  )

  return (
    <div className={resultingClassName}>
      {children}
    </div>
  )
}

export default Container
