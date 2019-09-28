import React from 'react'
import { ConnectedRouter } from 'connected-react-router'
import { Route, Switch } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import history from 'ownHistory'

const InnerApp: React.FC = () => {
  return (
    <>
      <CssBaseline />
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
    </>
  )
}

export default InnerApp
