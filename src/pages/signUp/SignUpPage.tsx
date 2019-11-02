import React from 'react'
import Layout from 'components/layout/Layout'
import HeaderSide from 'components/layout/header/HeaderSide'
import HeaderSideItem from 'components/layout/header/HeaderSideItem'
import SignInLinkButton from 'components/buttons/SignInLinkButton'
import ContentWithSidebar from 'components/layout/content/ContentWithSidebar'
import SidebarButton from 'components/buttons/SidebarButton'
import SignUpForm from './components/signUpForm/SignUpForm'

const SignUpPage: React.FC = () => {
  return (
    <Layout
      headerContent={
        <HeaderSide>
          <HeaderSideItem>
            <SignInLinkButton variant='transparent' />
          </HeaderSideItem>
        </HeaderSide>
      }
      content={
        <ContentWithSidebar
          sidebarInfo='Если у вас уже есть аккаунт, авторизуйтесь на сайте'
          sidebarContent={<SidebarButton
            ButtonComponent={SignInLinkButton}
            variant='transparent'
          />}
          mainHeader='Регистрация'
          mainContent={<SignUpForm />}
        />
      }
    />
  )
}

export default SignUpPage
