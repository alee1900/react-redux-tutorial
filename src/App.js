import { Provider } from 'react-redux'
import { LocalizeProvider } from 'react-localize-redux'
import React from 'react'
import configureStore from './store/configureStore'
import MainRouter from './router/router'
import { PersistGate } from 'redux-persist/integration/react'

const config = configureStore()
const { store, persistor } = config

export default () => {
  return (
      <Provider store={store}>
          <div className="under-root">
            <MainRouter/>
          </div>
      </Provider>
  )
}
