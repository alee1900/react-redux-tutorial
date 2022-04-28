import createHistory from 'history/createBrowserHistory'
import { applyMiddleware, createStore, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import ReduxThunk from 'redux-thunk'
import logger from 'redux-logger'
import { persistStore } from 'redux-persist'
import rootReducer from './RootReducer'
import DevTools from './DevTools'

export const history = createHistory()
const historyMiddleware = routerMiddleware(history)

export default () => {
  const initialState = {
  }

  let store = createStore(
    rootReducer,
    undefined,
    compose(
      applyMiddleware(
        historyMiddleware,
        ReduxThunk,
        logger
      ),
      DevTools.instrument()
    )
  )

  let persistor = persistStore(store)

  return {
    store,
    persistor
  }
}
