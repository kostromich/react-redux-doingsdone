import React from 'react'
import cx from 'classnames'
import makeStyles from '@material-ui/core/styles/makeStyles'
import useContentCommonStyles from 'hooks/useContentCommonStyles'
import SidebarContent from './sidebar/SidebarContent'
import MainContent from './main/MainContent'
import { IContentProps } from './Content'

const useStyles = makeStyles({
  root: {}
})

interface IOwnProps extends IContentProps {
  sidebarContent: React.ReactNode
}

const ContentWithSidebar: React.FC<IOwnProps> = ({
  mainContent,
  sidebarContent
}) => {
  const classes = useStyles({})
  const contentCommonClasses = useContentCommonStyles({})

  return (
    <div className={cx(contentCommonClasses.root, classes.root)}>
      <SidebarContent>{sidebarContent}</SidebarContent>
      <MainContent>
        {mainContent}
      </MainContent>
    </div>
  )
}

export default ContentWithSidebar
