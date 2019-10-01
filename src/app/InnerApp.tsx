import React from 'react'
import { ConnectedRouter } from 'connected-react-router'
import { Route, Switch } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/styles'
import createTheme from 'theme'
import CssBaseline from '@material-ui/core/CssBaseline'
import history from 'ownHistory'
import GlobalStyles from 'app/GlobalStyles'
import GuestPage from 'pages/guest/GuestPage'

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
              path='/'
              render={() => (<GuestPage />)}
            />
          </Switch>
        </ConnectedRouter>
      </ThemeProvider>
    </>
  )
}

export default InnerApp
