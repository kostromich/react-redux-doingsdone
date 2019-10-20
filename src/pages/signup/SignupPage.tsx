import React from 'react'
import Layout from 'components/layout/Layout'
import HeaderSide from 'components/layout/header/HeaderSide'
import HeaderSideItem from 'components/layout/header/HeaderSideItem'
import SignInButton from 'components/buttons/SignInButton'
import ContentWithSidebar from 'components/layout/content/ContentWithSidebar'
import SidebarButton from 'components/buttons/SidebarButton'
import SignupForm from './components/signupForm/SignupForm'

const SignupPage: React.FC = () => {
  return (
    <Layout
      headerContent={
        <HeaderSide>
          <HeaderSideItem>
            <SignInButton variant='transparent'/>
          </HeaderSideItem>
        </HeaderSide>
      }
      content={
        <ContentWithSidebar
          sidebarInfo='Если у вас уже есть аккаунт, авторизуйтесь на сайте'
          sidebarContent={<SidebarButton
            ButtonComponent={SignInButton}
            variant='transparent'
          />}
          mainHeader='Регистрация'
          mainContent={<SignupForm />}
        />
      }
    />
  )
}

export default SignupPage
