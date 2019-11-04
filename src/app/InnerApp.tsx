import React from 'react'
import { useSelector } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { Route, Switch, Redirect } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import history from 'ownHistory'
import createTheme from 'theme'
import GlobalStyles from 'app/GlobalStyles'
import GuestPage from 'pages/guest/GuestPage'
import MainPage from 'pages/main/MainPage'
import SignUpPage from 'pages/signUp/SignUpPage'
import SignInPage from 'pages/signIn/SignInPage'
import Page403 from 'pages/403/Page403'
import AuthenticatedContent from './AuthenticatedContent'
import { getIsInitialized } from 'selectors'
import * as routes from 'routes'

const InnerApp: React.FC = () => {
  const isInitialized = useSelector(getIsInitialized)

  if (!isInitialized) {
    return null
  }

  const theme = createTheme()

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        <ConnectedRouter history={history}>
          <Switch>
            <Route
              exact
              path={routes.ROUTE_HOME_PAGE}
              render={props =>
                <AuthenticatedContent
                  ContentPage={MainPage}
                  ErrorPage={Page403}
                  {...props}
                />
              }
            />
            <Route
              exact
              path={routes.ROUTE_SIGN_UP_PAGE}
              component={SignUpPage}
            />
            <Route
              exact
              path={routes.ROUTE_SIGN_IN_PAGE}
              component={SignInPage}
            />
            <Route
              exact
              path={routes.ROUTE_GUEST_PAGE}
              component={GuestPage}
            />
            <Route
              exact
              path={routes.ROUTE_403_ERROR_PAGE}
              component={Page403}
            />
            <Redirect to={routes.ROUTE_GUEST_PAGE} />
          </Switch>
        </ConnectedRouter>
      </ThemeProvider>
    </>
  )
}

export default InnerApp
