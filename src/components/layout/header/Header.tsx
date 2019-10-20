import React from 'react'
import cx from 'classnames'
import makeStyles from '@material-ui/core/styles/makeStyles'
import ProjectLogo from 'components/ProjectLogo'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px 0 26px'
  }
})

interface IOwnProps {
  className?: string
}

const Header: React.FC<IOwnProps> = ({ className, children }) => {
  const classes = useStyles({})

  return (
    <header className={cx(classes.root, className)}>
      <ProjectLogo />
      {children}
    </header>
  )
}

export default Header
