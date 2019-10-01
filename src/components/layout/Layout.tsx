import React from 'react'
import Body from './Body'
import PageWrapper from './PageWrapper'
import Container from './Container'
import Header from './header/Header'
import Content from './Content'
import Footer from './footer/Footer'

interface IOwnProps {
  bodyClassName?: string
  content: React.ReactNode
}

const Layout: React.FC<IOwnProps> = ({
  bodyClassName,
  content
}) => {
  return (
    <Body className={bodyClassName}>
      <PageWrapper>
        <Container>
          <Header />
          <Content>
            {content}
          </Content>
        </Container>
      </PageWrapper>
      <Footer />
    </Body>
  )
}

export default Layout
