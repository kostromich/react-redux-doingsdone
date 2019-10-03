import React from 'react'
import MainHeader from 'components/layout/content/main/Header'
import Tasks, { TASKS_HEADER } from './tasks/Tasks'

const MainPageMainContent: React.FC = () => {
  return (
    <>
      <MainHeader>
        {TASKS_HEADER}
      </MainHeader>
      <Tasks />
    </>
  )
}

export default MainPageMainContent
