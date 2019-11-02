import React from 'react'
import Body from './Body'
import PageWrapper from './PageWrapper'
import Container from './Container'
import Header from './header/Header'
import Footer from './footer/Footer'

interface IOwnProps {
  bodyClassName?: string
  headerContent: React.ReactNode
  content: React.ReactNode
}

const Layout: React.FC<IOwnProps> = ({
  bodyClassName,
  headerContent,
  content
}) => {
  return (
    <Body className={bodyClassName}>
      <PageWrapper>
        <Container>
          <Header>
            {headerContent}
          </Header>
          {content}
        </Container>
      </PageWrapper>
      <Footer />
    </Body>
  )
}

export default Layout
