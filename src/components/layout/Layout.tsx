import React from 'react'
import Body from './Body'
import PageWrapper from './PageWrapper'
import Container from './Container'
import Header, { IHeaderProps } from './header/Header'
import Content, { IContentProps } from './content/Content'
import Footer from './footer/Footer'

interface IOwnProps {
  bodyClassName?: string
}

const Layout: React.FC<IOwnProps & IContentProps & IHeaderProps> = ({
  bodyClassName,
  mainContent,
  sidebarContent,
  headerSideContent
}) => {
  return (
    <Body className={bodyClassName}>
      <PageWrapper>
        <Container withSidebar={!!sidebarContent}>
          <Header headerSideContent={headerSideContent} />
          <Content
            mainContent={mainContent}
            sidebarContent={sidebarContent}
          />
        </Container>
      </PageWrapper>
      <Footer />
    </Body>
  )
}

export default Layout
