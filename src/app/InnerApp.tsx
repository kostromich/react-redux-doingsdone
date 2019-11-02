import React from 'react'
import { ConnectedRouter } from 'connected-react-router'
import { Route, Switch, Redirect } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/styles'
import createTheme from 'theme'
import CssBaseline from '@material-ui/core/CssBaseline'
import history from 'ownHistory'
import GlobalStyles from 'app/GlobalStyles'
import GuestPage from 'pages/guest/GuestPage'
import MainPage from 'pages/main/MainPage'
import SignUpPage from 'pages/signUp/SignUpPage'
import * as routes from 'routes'

const InnerApp: React.FC = () => {
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
              component={MainPage}
            />
            <Route
              path={routes.ROUTE_SIGN_UP_PAGE}
              component={SignUpPage}
            />
            <Route
              path={routes.ROUTE_GUEST_PAGE}
              component={GuestPage}
            />
            <Redirect to={routes.ROUTE_GUEST_PAGE} />
          </Switch>
        </ConnectedRouter>
      </ThemeProvider>
    </>
  )
}

export default InnerApp
