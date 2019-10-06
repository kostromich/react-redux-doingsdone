import React from 'react'
import Layout from 'components/layout/Layout'
import HeaderSideContent from './components/layout/HeaderSideContent'
import MainPageMainContent from './components/layout/MainPageMainContent'
import MainPageSidebarContent from './components/layout/MainPageSidebarContent'

const MainPage: React.FC = () => {
  return (
    <Layout
      sidebarContent={<MainPageSidebarContent />}
      mainContent={<MainPageMainContent />}
      headerSideContent={<HeaderSideContent />}
    />
  )
}

export default MainPage
