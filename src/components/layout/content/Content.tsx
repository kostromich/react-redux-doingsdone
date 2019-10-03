import React from 'react'
import ContentWithSidebar from './ContentWithSidebar'
import SingleContent from './SingleContent'

export interface IContentProps {
  mainContent: React.ReactNode
  sidebarContent?: React.ReactNode
}

const Content: React.FC<IContentProps> = ({
  mainContent,
  sidebarContent
}) => {
  const withSidebar = !!sidebarContent

  if (withSidebar) {
    return <ContentWithSidebar
      mainContent={mainContent}
      sidebarContent={sidebarContent}
    />
  }

  return (
    <SingleContent>
      {mainContent}
    </SingleContent>
  )
}

export default Content
