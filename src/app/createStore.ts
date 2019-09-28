import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { routerMiddleware } from 'connected-react-router'
import rootReducer from 'modules'
import history from 'ownHistory'

export default () => {
  return createStore(
    rootReducer({ history }),
    applyMiddleware(
      thunk,
      routerMiddleware(history)
    )
  )
}
