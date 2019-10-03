import React from 'react'
import Layout from 'components/layout/Layout'
import MainPageMainContent from './components/MainPageMainContent'
import MainPageSidebarContent from './components/MainPageSidebarContent'

const MainPage: React.FC = () => {
  return (
    <Layout
      sidebarContent={<MainPageSidebarContent />}
      mainContent={<MainPageMainContent />}
    />
  )
}

export default MainPage
