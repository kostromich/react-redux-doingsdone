import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Sidebar from './sidebar/Sidebar'
import Main from './main/Main'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    marginBottom: 120
  }
})

interface IOwnProps {
  sidebarHeader?: string
  sidebarContent: React.ReactNode
  mainHeader?: string
  mainContent: React.ReactNode
}

const ContentWithSidebar: React.FC<IOwnProps> = ({
  sidebarHeader,
  sidebarContent,
  mainHeader,
  mainContent
}) => {
  const classes = useStyles({})

  return (
    <div className={classes.root}>
      <Sidebar
        header={sidebarHeader}
        content={sidebarContent}
      />
      <Main
        header={mainHeader}
        content={mainContent}
      />
    </div>
  )
}

export default ContentWithSidebar
