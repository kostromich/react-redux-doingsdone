import React from 'react'
import Layout from 'components/layout/Layout'
import HeaderSide from 'components/layout/header/HeaderSide'
import HeaderSideItem from 'components/layout/header/HeaderSideItem'
import SidebarButton from 'components/buttons/SidebarButton'
import SignUpLinkButton from 'components/buttons/SignUpLinkButton'
import ContentWithSidebar from 'components/layout/content/ContentWithSidebar'
import SignInForm from './components/signInForm/SignInForm'

const SignInPage: React.FC = () => {
  return (
    <Layout
      headerContent={
        <HeaderSide>
          <HeaderSideItem>
            <SignUpLinkButton variant='transparent' />
          </HeaderSideItem>
        </HeaderSide>
      }
      content={
        <ContentWithSidebar
          sidebarInfo='Если у вас ещё нет аккаунта, зарегистрируйтесь на сайте'
          sidebarContent={<SidebarButton
            ButtonComponent={SignUpLinkButton}
            variant='transparent'
          />}
          mainHeader='Вход на сайт'
          mainContent={<SignInForm />}
        />
      }
    />
  )
}

export default SignInPage
