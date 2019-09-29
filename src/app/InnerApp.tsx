import React from 'react'
import { ConnectedRouter } from 'connected-react-router'
import { Route, Switch } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/styles'
import createTheme from 'app/theme'
import CssBaseline from '@material-ui/core/CssBaseline'
import history from 'ownHistory'
import GlobalStyles from 'app/GlobalStyles'

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
              path='/'
              render={() => (<h1>Home</h1>)}
            />
            <Route
              path='/guest'
              render={() => (<h1>Guest</h1>)}
            />
            <Route
              path='/'
              render={() => (<h1>Default</h1>)}
            />
          </Switch>
        </ConnectedRouter>
      </ThemeProvider>
    </>
  )
}

export default InnerApp
